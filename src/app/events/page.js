"use client"
import SVG from '@/app/_libs/svg'
import { useEffect, useState } from 'react'
import { useWindowSize } from '@react-hook/window-size'
import { useMutation, useQuery } from '@apollo/client'
import { useSelector, useDispatch } from "react-redux";
import { getCountries, AsYouType, parsePhoneNumber } from 'libphonenumber-js'

//// COMPONENTS
import Nav from '@/app/_components/nav'
import Footer from '@/app/_components/footer'
import Hero from '@/app/_components/_events/hero'
import InputField from '@/app/_components/_forms/inputField'
import Button from '@/app/_components/_forms/button'

///// QUERIES AND MUTATIONS
import GET_EVENTS from '@/app/_queries/fetchEvents'
import SEND_INQUIRY from '@/app/_mutations/sendInquiry'

///// REDUCERS
import { changeEventContactValue, editEventContact, changeEventContactImages, resetEventContact } from '@/app/_redux/features/eventContact'
import { validateNumber, validateEmail } from "../_helpers/main";

const useDebouncedEffect = (callback, dependencies, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [...dependencies, delay]);
};

const Events = ({}) => {
  
  const dispatch                              = useDispatch()
  const [width, height]                       = useWindowSize()
  const [windowWidth, setWindowWidth]         = useState()
  const [loading, setLoading]                 = useState('')
  const [country, setCountry]                 = useState('US')
  const [events, setEvents]                   = useState([])
  const [contact, setContact]                 = useState('')
  const [message, setMessage]                 = useState('')
  const [debouncedPhone, setDebouncedPhone]   = useState(contact.phone);
  const currentEventContact                   = useSelector((state) => state.eventContactReducer)

  //// DATA
  const dataEvents                            = useQuery(GET_EVENTS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})

  //// REFETCH
  const { refetch: refetchEvents  }           = useQuery(GET_EVENTS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})

  //// MUTATIONS
  const [sendInquiry, { dataSendInquiry, loadingDataInquiry, errorDataInquiry }] = useMutation(SEND_INQUIRY)

  const encodeHtmlEntities = (str) => {
    return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    setWindowWidth(width)
  }, [width])

  //// LISTS
  useEffect(() => {
    if(dataEvents.data) setEvents(dataEvents.data.allEvents)
  }, [dataEvents])

  useEffect(() => {
    if (currentEventContact.value) setContact(currentEventContact.value);
  }, [currentEventContact.value]);

  // useEffect(() => {
    
  //   if(country && contact && contact.phone.length > 0){
  //     const asYouType = new AsYouType(country)
  //     asYouType.input(contact.phone)
      
  //     if(asYouType.getNumber()){
  //       let number = asYouType.getNumber().number
  //       number = new AsYouType(country).input(number)
        
  //       dispatch(changeEventContactValue({ value: number, type: 'phone' }))
  //     }
  //   }
    
  // }, [contact.phone, country, dispatch])

  useDebouncedEffect(() => {
    if (country && debouncedPhone && debouncedPhone.length > 0) {
      const asYouType = new AsYouType(country);
      asYouType.input(debouncedPhone);

      if (asYouType.getNumber()) {
        let number = asYouType.getNumber().number;
        number = new AsYouType(country).input(number);

        dispatch(changeEventContactValue({ value: number, type: 'phone' }));
      }
    }
  }, [debouncedPhone, country, dispatch], 300); // Adjust the delay as needed

  useEffect(() => {
    setDebouncedPhone(contact.phone);
  }, [contact.phone]);


  const submitSendInquiry = async () => {

    if(!validateEmail(contact.email)) return setMessage('Email is not valid')
    if(!contact.name) return setMessage('Name is required')
    if(!contact.phone) return setMessage('Phone is required')
    if(!contact.guests) return setMessage('Guests is required')
    if(!contact.description) return setMessage('Description is required')

    setLoading('sendInquiry')

    try {

      const response = await sendInquiry({
        variables: {
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          guests: contact.guests,
          description: contact.description
        }
      })

      setLoading('')
      dispatch(resetEventContact())
      setMessage(response.data.sendInquiry.message)
      
    } catch (error) {
      console.log(error)
      setLoading('')
      if(error) setMessage(error.message)
    }
    
  }
  
  return (
    <>
      <main className="relative">
        <Nav />
      </main>
      <section 
        className="xl:padding-l wide:padding-r padding-b shadow-lg bg-cover bg-center	bg-no-repeat h-[800px] shadows-2xl"
        style={{ backgroundImage: windowWidth < 765 ? "url('/assets/homeHeaderThree.jpeg')" : "url('/assets/homeHeaderThree.jpeg')" }}
      >
        <Hero />
      </section>
      <section
        className="flex justify-center py-5 flex-col items-center px-[200px] gap-y-3 text-center max-md:px-[20px] my-[20px]"
      >
        <h1 className="text-[28px] font-[600] text-schemetwo uppercase">Events</h1>
      </section>
      <section
        className="flex justify-center items-center py-5 my-[50px]"
      >
        <div className="grid grid-cols-3 gap-x-5 max-xl:grid-cols-2 max-md:grid-cols-1">
          {events && events.map((item, idx) => 
            // console.log(item)
            <div 
              className="flex gap-x-5 w-[400px] h-[200px] max-sm:w-[300px] max-xl:h-[300px]"
              key={idx}
            >
              <div className="w-[125px] h-[125px] rounded-full shadow-xl max-sm:w-[75px] max-sm:h-[75px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={item.images[0] ? `${item.images[0].url}` : 'https://via.placeholder.com/300'}
                >
                </img>
              </div>
              <div className="flex flex-col w-[225px]">
                <div className="text-[22px] font-[600] capitalize">{item.name}</div>
                <div className="text-[16px] font-[600] text-grey capitalize">{item.date}</div>
                <div className="text-[14px] font-[400] capitalize" dangerouslySetInnerHTML={{ __html: item.description }}></div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section
        className="flex justify-center py-5 flex-col items-center px-[200px] gap-y-3 text-center max-md:px-[20px] my-[20px]"
      >
        <h1 className="text-[28px] font-[600] text-schemetwo uppercase">Private Events</h1>
        <h3 className="text-[16px] font-[400]">For private events please contact us at <a className="underline underline-offset-8">events@ministryofbrewing.com</a></h3>
        {contact &&
          <div className="w-[40%] max-xl:w-[60%] max-lg:w-[80%] bg-gray-100 px-3 py-3 rounded-xl shadow-xl my-5">
            <div className="flex flex-col gap-y-3">
              <InputField 
                label="name"
                item={contact}
                property={'name'}
                dispatch={dispatch}
                stateMethod={changeEventContactValue}
                id="name"
              />
              <InputField 
                label="email"
                item={contact}
                property={'email'}
                dispatch={dispatch}
                stateMethod={changeEventContactValue}
                id="email"
              />
              <InputField 
                label="phone"
                item={contact}
                property={'phone'}
                dispatch={dispatch}
                stateMethod={changeEventContactValue}
                validation={true}
                validationMethod={validateNumber}
                id="phone"
              />
              <InputField 
                label="guests"
                item={contact}
                property={'guests'}
                dispatch={dispatch}
                stateMethod={changeEventContactValue}
                validation={true}
                validationMethod={validateNumber}
                id="guests"
              />
              <div className="grid grid-cols-1 w-full">
                <textarea 
                  id="message" 
                  rows="4" 
                  className="block p-2.5 w-full text-sm text-black rounded-lg border border-schemefour focus:ring-schemefour focus:border-schemefour dark:bg-white dark:border-schemefour focus:outline-schemefour dark:placeholder-schemefour dark:text-black dark:focus:ring-schemefour dark:focus:border-schemefour placeholder:black" 
                  placeholder="Brief description"
                  value={contact.description}
                  onChange={(e) => dispatch(changeEventContactValue({ value: e.target.value, type: 'description' }))}
                  >
                </textarea>
              </div>
              <div 
                className="w-[100%] my-3"
                onClick={() => submitSendInquiry()}
              >
                <Button 
                  label='Send Inquiry'
                  backgroundColor={'#E14620'}
                  width={50}
                  height={50}
                  font={400}
                  fullWidth={true}
                  textColor={'#FFFFFF'}
                  borderColor={'#E14620'}
                  borderRadius={true}
                  loading={loading}
                  loadingType={'sendInquiry'}
                  showSVG={false}
                  svg={'arrowRight'}
                  svgColor={'white'}
                  svgBackgroundColor={'#ffffff'}
                />
              </div>
              {message &&
                <div className="w-full text-[14px] text-schemeone px-3">
                  * {message.substring(0, 120)}
                </div>
              }
            </div>
          </div>
        }
      </section>
      <main className="relative">
        <Footer />
      </main>
    </>
  );
}

export default Events

