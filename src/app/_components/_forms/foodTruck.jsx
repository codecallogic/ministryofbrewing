"use client"
import SVG from '@/app/_libs/svg'
import { useState, useEffect, useCallback } from 'react'
import { EditorState } from 'draft-js';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), { ssr: false });
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useS3Upload } from "next-s3-upload"

//// COMPONENTS
import InputField from './inputField'
import Button from './button'
import UploadButton from './fileUploadButton'

///// HELPERS
import { checkObjectValues, removeItemByIndex } from '@/app/_helpers/main'

const FoodTruck = ({
  dispatch,
  changePopup,
  changeEventValue,
  changeEventImages,
  event,
  newEvent,
  resetEvent,
  changeView,
  edit,
  updateEvent,
  refetch,
  deleteEventImage
}) => {

  const [message, setMessage]                         = useState('')
  const [loading, setLoading]                         = useState('')
  const [images, setImages]                           = useState([])
  const [convertedContent, setConvertedContent]       = useState(null);
  const [editorState, setEditorState]                 = useState(EditorState.createEmpty())
  const [startDate, setStartDate]                     = useState(event.date ? event.date : new Date());
  const { FileInput, openFileDialog, uploadToS3 }     = useS3Upload();

  const submitFoodTruck = async () => {
    
    try {

      let array = []
      setLoading('createEvent')
      
      if(images){
        const updatedPromises = await Promise.all(images.map(async (item, idx) => {
          if (!item.url) {
            let { url } = await uploadToS3(item);
            array.push({ url: url })
          } else {
            array.push(item)
          }
        }))        
      }
      
      const response = await newEvent({
        variables: {
          name: event.name,
          description: convertedContent,
          date: event.date,
          images: array
        }
      })

      setLoading('')
      dispatch(resetEvent())
      setMessage(response.data.newEvent.message)
      setImages([])
      
    } catch (error) {
      console.log(error)
  
      if(error) setMessage(error.message)
    }
    
  }

  const submitUpdateEvent = async () => {
    
    try {

      let array = []
      setLoading('updateEvent')
      
      if(images){

        const updatedPromises = await Promise.all(images.map(async (item, idx) => {
          if (!item.url) {
            let { url } = await uploadToS3(item);
            array.push({ url: url })
          } else {
            array.push(item)
          }
        }))

      }

      setImages(array)

      const response = await updateEvent({
        variables: {
          id: event.id,
          name: event.name,
          description: convertedContent !== '<p></p>' ? convertedContent : event.description,
          date: event.date,
          images: array
        }
      })

      refetch()
      setLoading('')
      setMessage(response.data.updateEvent.message)
      
    } catch (error) {
      console.log(error)
      if(error) setMessage(error.message)
    }
    
  }

  const deleteImage = async (url) => {

    setLoading(`deleteEventImage-${url}`)

    try {

      const response = await deleteEventImage({
        variables: {
          id: event.id,
          images: images,
          url: url
        }
      })

      let newArray        = images.filter((item) => item.url !== url)

      refetch()
      setLoading('')
      setImages(newArray)
      setMessage(response.data.deleteEventImage.message)
      
    } catch (error) {
      console.log(error)
      if(error) setMessage(error.message)
    }
    
  }

  useEffect(() => {
    const html = convertToHTML({
      entityToHTML: (entity, originalText) => {
        if (entity.type === 'LINK') {
          return <a href={entity.data.url}>{originalText}</a>;
        }
        return originalText;
      }
    })(editorState.getCurrentContent());
    setConvertedContent(html);
    
  }, [editorState]);

  useEffect(() => {
    if(event.images) setImages(event.images)
  }, [event.images])  

  useEffect(() => {
    const date = new Date(startDate)
    const regularDateFormat = date.toLocaleDateString()
    dispatch(changeEventValue({ value: regularDateFormat, type: 'date' }))
  }, [startDate])
  
  return (
    <div id="default-modal" tabIndex="-1" aria-hidden="true" className="overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex bg-[rgba(0, 0, 0, 0.5)] justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/50">
      <div className="relative p-4 w-[50%] max-h-full">
          <div className="relative bg-white rounded-xl shadow-xl dark:bg-gray-700">
            <div className="flex items-center justify-between pt-5 pb-3 px-5 rounded-lg dark:border-gray-600 h-[50px]">
                <h3 className="flex flex-col">
                  <span className="font-poppins text-[24px] font-[900] text-gray-900 dark:text-white">{edit ? 'Update Event' : 'Create Event'}</span>
                </h3>
                {event && checkObjectValues(event, images) && !edit &&
                  <div 
                    className="w-min flex justify-center ml-3"
                    onClick={() => submitFoodTruck()}
                  >
                    <Button 
                      label='Save'
                      backgroundColor={'#000000'}
                      width={50}
                      height={50}
                      font={400}
                      fullWidth={false}
                      textColor={'#FFFFFF'}
                      borderColor={'black'}
                      borderRadius={true}
                      loading={loading}
                      loadingType={'createEvent'}
                      showSVG={false}
                      svg={'arrowRight'}
                      svgColor={'white'}
                      svgBackgroundColor={'#B78514'}
                    />
                  </div>
                }
                {event && checkObjectValues(event, images) && edit == 'event' &&
                  <div 
                    className="w-min flex justify-center ml-3"
                    onClick={() => submitUpdateEvent()}
                  >
                    <Button 
                      label='Update'
                      backgroundColor={'#000000'}
                      width={50}
                      height={50}
                      font={400}
                      fullWidth={false}
                      textColor={'#FFFFFF'}
                      borderColor={'black'}
                      borderRadius={true}
                      loading={loading}
                      loadingType={'updateEvent'}
                      showSVG={false}
                      svg={'arrowRight'}
                      svgColor={'white'}
                      svgBackgroundColor={'#B78514'}
                    />
                  </div>
                }
                { message &&
                  <div className="ml-3 text-[16px] font-[400]">
                    *{message.substring(0,40)}
                  </div>
                }
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal"
                  onClick={() => dispatch(changePopup(''))}
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="flex items-center justify-between p-2 md:p-5 border-b rounded-lg dark:border-gray-600 h-[20px]">
                <h3 className="flex flex-col">
                  <span 
                    className="font-poppins text-[16px] font-[400] text-gold underline dark:text-white hover:cursor-pointer"
                    onClick={() => (dispatch(changeView('events'), dispatch(changePopup(''))))}
                  >
                    view all
                  </span>
                </h3>
            </div>
            <div className="p-4 md:p-5 space-y-4 h-[40rem] overflow-y-scroll">
              <InputField 
                label="name"
                item={event}
                property={'name'}
                dispatch={dispatch}
                stateMethod={changeEventValue}
                id="name"
              />
              {/* <InputField 
                label="date"
                item={event}
                property={'date'}
                dispatch={dispatch}
                stateMethod={changeEventValue}
                id="date"
              /> */}
              {/* { event.date &&  <div className="p-3 bg-gray-200">Current date: {event.date}</div>} */}
              <div className="w-[100%] border-schemefour border-[1px] rounded-md py-3">
                <DatePicker 
                  className="datepicker"
                  selected={startDate} 
                  onChange={(date) => (
                    setStartDate(date)
                  )} 
                />
              </div>
              <UploadButton
                svg={true}
                svgType={'upload'}
                svgWidth={40}
                svgHeight={40}
                svgColor={'#B78514'}
                label={'Upload Images'}
                formType={'file'}
                id="imageFiles"
                item={event}
                property={'images'}
                dispatch={dispatch}
                stateMethod={changeEventImages}
                setMessage={setMessage}
                setImages={setImages}
                images={images}
              >
              </UploadButton>
              {images.length == 0 &&
                 <a 
                 className="w-full mt-2 rounded-xl"
                 target="_blank" 
                 rel="noreferrer"
                 >
                   <img 
                    className="w-full mt-2 rounded-xl"
                    src='https://via.placeholder.com/300'
                   />
                 </a>
              }
              {images.length > 0 && images.map((item, idx) => (
                <a 
                key={idx} 
                onClick={() => window.open(item.url ? item.url : URL.createObjectURL(item), '_blank')}
                className="w-full relative rounded-2xl mt-2"
                target="_blank" 
                rel="noreferrer"
                >
                  <img 
                    className="rounded-2xl bg-cover w-[100%]"
                    src={item.url ? item.url : URL.createObjectURL(item)}
                  />
                  <div 
                    className="absolute top-2 right-1 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center hover:cursor-pointer"
                    onClick={(e) => (e.stopPropagation(), images[idx].url ? deleteImage(item.url) : setImages(removeItemByIndex(idx, images))) }
                  >
                  { loading == `deleteEventImage-${item.url}` 
                    ? 
                    <div className="loading border-r-gold after:border-r-gold before:border-l-gold mr-3"></div>
                    :
                    <SVG 
                      svg={'close'}
                      width={20}
                      height={20}
                      schemeOne={'black'}
                    >
                    </SVG>
                  }
                  </div>
                </a>
              ))}
              { event.description &&  <div className="p-3 bg-gray-200" dangerouslySetInnerHTML={{ __html: event.description }}></div>}
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default FoodTruck
