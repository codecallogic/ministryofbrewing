"use client"
import SVG from '@/app/_libs/svg'
import { useState, useEffect } from 'react'
import { useS3Upload } from "next-s3-upload"

//// COMPONENTS
import InputField from './inputField'
import Button from './button'
import UploadButton from './fileUploadButton'

///// HELPERS
import { checkObjectValues, removeItemByIndex } from '@/app/_helpers/main'

const NewBeer = ({
  dispatch,
  changePopup,
  changeBeerValue,
  changeBeerImages,
  beer,
  newBeer,
  resetBeer,
  changeView,
  edit,
  updateBeer,
  refetch,
  deleteBeerImage
}) => {

  const [message, setMessage]                         = useState('')
  const [loading, setLoading]                         = useState('')
  const [images, setImages]                           = useState([])
  const { FileInput, openFileDialog, uploadToS3 }     = useS3Upload();

  const submitNewBeer = async () => {
    
    try {

      let array = []
      setLoading('createBeer')
      
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
      
      const response = await newBeer({
        variables: {
          name: beer.name,
          abv: beer.abv,
          style: beer.style,
          images: array
        }
      })

      setLoading('')
      dispatch(resetBeer())
      setMessage(response.data.newBeer.message)
      setImages([])
      
    } catch (error) {
      console.log(error)
  
      if(error) setMessage(error.message)
    }
    
  }

  const submitUpdateBeer = async () => {

    try {

      let array = []
      setLoading('updateBeer')
      
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

      const response = await updateBeer({
        variables: {
          id: beer.id,
          name: beer.name,
          abv: beer.abv,
          style: beer.style,
          images: array
        }
      })

      refetch()
      setLoading('')
      setMessage(response.data.updateBeer.message)
      
    } catch (error) {
      console.log(error)
      if(error) setMessage(error.message)
    }
    
  }

  const deleteImage = async (url) => {

    setLoading(`deleteBeerImage-${url}`)

    try {

      const response = await deleteBeerImage({
        variables: {
          id: beer.id,
          images: images,
          url: url
        }
      })

      let newArray        = images.filter((item) => item.url !== url)

      refetch()
      setLoading('')
      setImages(newArray)
      setMessage(response.data.deleteBeerImage.message)
      
    } catch (error) {
      console.log(error)
      if(error) setMessage(error.message)
    }
    
  }

  useEffect(() => {
    if(beer) setImages(beer.images)
  }, [beer])  
  
  return (
    <div id="default-modal" tabIndex="-1" aria-hidden="true" className="overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex bg-[rgba(0, 0, 0, 0.5)] justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/50">
      <div className="relative p-4 w-[50%] max-h-full">
          <div className="relative bg-white rounded-xl shadow-xl dark:bg-gray-700">
            <div className="flex items-center justify-between pt-5 pb-3 px-5 rounded-lg dark:border-gray-600 h-[50px]">
                <h3 className="flex flex-col">
                  <span className="font-poppins text-[24px] font-[900] text-gray-900 dark:text-white">{edit ? 'Update Beer' : 'Create Beer'}</span>
                </h3>
                {beer && checkObjectValues(beer, images) && !edit &&
                  <div 
                    className="w-min flex justify-center ml-3"
                    onClick={() => submitNewBeer()}
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
                      loadingType={'createBeer'}
                      showSVG={false}
                      svg={'arrowRight'}
                      svgColor={'white'}
                      svgBackgroundColor={'#B78514'}
                    />
                  </div>
                }
                {beer && checkObjectValues(beer, images) && edit == 'beer' &&
                  <div 
                    className="w-min flex justify-center ml-3"
                    onClick={() => submitUpdateBeer()}
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
                      loadingType={'updateBeer'}
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
                    onClick={() => (dispatch(changeView('beers'), dispatch(changePopup(''))))}
                  >
                    view all
                  </span>
                </h3>
            </div>
            <div className="p-4 md:p-5 space-y-4 h-[40rem] overflow-y-scroll">
              <InputField 
                label="name"
                item={beer}
                property={'name'}
                dispatch={dispatch}
                stateMethod={changeBeerValue}
                id="name"
              />
              <InputField 
                label="abv"
                item={beer}
                property={'abv'}
                dispatch={dispatch}
                stateMethod={changeBeerValue}
                id="abv"
              />
              <InputField 
                label="style"
                item={beer}
                property={'style'}
                dispatch={dispatch}
                stateMethod={changeBeerValue}
                id="style"
              />
              <UploadButton
                svg={true}
                svgType={'upload'}
                svgWidth={40}
                svgHeight={40}
                svgColor={'#B78514'}
                label={'Upload Images'}
                formType={'file'}
                id="imageFiles"
                item={beer}
                property={'images'}
                dispatch={dispatch}
                stateMethod={changeBeerImages}
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
                    className="rounded-2xl bg-cover"
                    src={item.url ? item.url : URL.createObjectURL(item)}
                  />
                  <div 
                    className="absolute top-3 right-3 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center hover:cursor-pointer bg-schemetwo"
                    onClick={(e) => (e.stopPropagation(), images[idx].url ? deleteImage(item.url) : setImages(removeItemByIndex(idx, images))) }
                  >
                  { loading == `deleteBeerImage-${item.url}` 
                    ? 
                    <div className="loading border-r-gold after:border-r-gold before:border-l-gold mr-3"></div>
                    :
                    <SVG 
                      svg={'close'}
                      width={15}
                      height={15}
                      schemeOne={'white'}
                    >
                    </SVG>
                  }
                  </div>
                </a>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewBeer
