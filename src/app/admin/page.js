
"use client"
//// MODULES
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
 
//// COMPONENTS
import TopNav from "../_components/_admin/_dashboard/topNav"
import SideNav from '../_components/_admin/_dashboard/sideNav'
import Dashboard from '../_components/_admin/_dashboard/dashboard'
import NewBeer from "../_components/_forms/beer";
import Beers from '../_components/_admin/_dashboard/beers'
import NewEvent from '../_components/_forms/event'
import Events from '../_components/_admin/_dashboard/events'

//// REDUCERS
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/app/_redux/features/authSlice";
import { changeView, changePopup, changeEdit } from "@/app/_redux/features/navigationSlice";
import { changeBeerValue, editBeer, changeBeerImages, resetBeer } from "../_redux/features/beerSlice";
import { changeEventValue, editEvent, resetEvent } from "../_redux/features/eventSlice";

///// QUERIES
import GET_USER from '@/app/_queries/fetchUser'
import GET_BEERS from '@/app/_queries/fetchBeers'
import GET_EVENTS from '@/app/_queries/fetchEvents'

///// MUTATIONS
import NEW_BEER from '@/app/_mutations/newBeer'
import UPDATE_BEER from '@/app/_mutations/updateBeer'
import DELETE_BEER from '@/app/_mutations/deleteBeer'
import DELETE_BEER_IMAGE from '@/app/_mutations/deleteBeerImage'
import NEW_EVENT from '@/app/_mutations/newEvent'
import UPDATE_EVENT from '@/app/_mutations/updateEvent'
import DELETE_EVENT from '@/app/_mutations/deleteEvent'

const Admin = ({}) => {

  const dispatch                              = useDispatch()
  const router                                = useRouter();
  const [loadingData, setLoadingData]         = useState(true)
  const [user, setUser]                       = useState('')
  const [view, setView]                       = useState('')
  const [popup, setPopup]                     = useState('')
  const [edit, setEdit]                       = useState('')
  const [beer, setBeer]                       = useState('')
  const [beers, setBeers]                     = useState([])
  const [event, setEvent]                     = useState('')
  const [events, setEvents]                   = useState([])
  const currentNavigation                     = useSelector((state) => state.navigationReducer);
  const currentBeer                           = useSelector((state) => state.beerReducer);
  const currentEvent                          = useSelector((state) => state.eventReducer);
  const [cookies, setCookie, removeCookie]    = useCookies(['adminToken', 'adminUser', 'view']);

  //// DATA
  const dataUser                              = useQuery(GET_USER, { variables: { id: cookies.adminUser ? cookies.adminUser.id : 'unknown', token: cookies.adminToken ? cookies.adminToken : 'unknown'}})
  const dataBeers                             = useQuery(GET_BEERS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataEvents                            = useQuery(GET_EVENTS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})

  //// REFETCH
  const { refetch: refetchBeers  }            = useQuery(GET_BEERS, { variables: { id: cookies.adminUser ? cookies.adminUser.id : 'unknown', token: cookies.adminToken ? cookies.adminToken : 'unknown' } })
  const { refetch: refetchEvents  }           = useQuery(GET_EVENTS, { variables: { id: cookies.adminUser ? cookies.adminUser.id : 'unknown', token: cookies.adminToken ? cookies.adminToken : 'unknown' } })

  //// MUTATIONS
  const [newBeer, { dataNewBeer, loadingNewBeer, errorNewBeer }] = useMutation(NEW_BEER, { refetchQueries: [ GET_BEERS ]})
  const [updateBeer, { dataUpdateBeer, loadingUpdateBeer, errorUpdateBeer}] = useMutation(UPDATE_BEER, { refetchQueries: [ GET_BEERS ]})
  const [deleteBeerImage, { dataDeleteBeerImage, loadingDeleteBeerImage, errorDeleteBeerImage}] = useMutation(DELETE_BEER_IMAGE, { refetchQueries: [ GET_BEERS ]})
  const [deleteBeer, { dataDeleteBeer, loadingDeleteBeer, errorDeleteBeer}] = useMutation(DELETE_BEER, { refetchQueries: [ GET_BEERS ]})

  const [newEvent, { dataNewEvent, loadingNewEvent, errorNewEvent }] = useMutation(NEW_EVENT, { refetchQueries: [ GET_EVENTS ]})
  const [updateEvent, { dataUpdateEvent, loadingUpdateEvent, errorUpdateEvent}] = useMutation(UPDATE_EVENT, { refetchQueries: [ GET_EVENTS ]})
  const [deleteEvent, { dataDeleteEvent, loadingDeleteEvent, errorDeleteEvent}] = useMutation(DELETE_EVENT, { refetchQueries: [ GET_EVENTS ]})

  useEffect(() => {

    setLoadingData(true)
    // console.log(dataUser)
    if(dataUser.error){ 
      console.log('ERROR')
      dataUser.error.message = 'Invalid token' ? router.push('/admin/login') : router.push('/error') 
    }

    if(!dataUser.error) setLoadingData(false)
    
    if(dataUser.data && dataUser.data.user){
      setUser(dataUser.data.user)
      dispatch(login())
    }
    
  }, [dataUser])
  
  //// REDUX
  useEffect(() => {
    setView(currentNavigation.value.view)
    setPopup(currentNavigation.value.popup)
    setEdit(currentNavigation.value.edit)
  }, [currentNavigation])

  useEffect(() => {
    setBeer(currentBeer.value)
  }, [currentBeer])

  useEffect(() => {
    setEvent(currentEvent.value)
  }, [currentEvent])

  //// LISTS

  useEffect(() => {
    if(dataBeers.data) setBeers(dataBeers.data.allBeers)
  }, [dataBeers])

  useEffect(() => {
    if(dataEvents.data) setEvents(dataEvents.data.allEvents)
  }, [dataEvents])
  
  if(!user) return <div className="ring">Loading</div>

  
  return (
    <>
      <main className="relative ">
        <SideNav
          dispatch={dispatch}
          changeView={changeView}
          logout={logout}
          router={router}
          view={view}
          user={user}
        />
      </main>
      <div className="w-full flex flex-col">
        <TopNav 
          dispatch={dispatch}
          changeView={changeView}
          logout={logout}
          router={router}
          user={user}
        />
        { view == 'dashboard' &&
          <Dashboard
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            resetBeer={resetBeer}
            resetEvent={resetEvent}
            beers={beers}
            events={events}
          />
        }
        { view == 'beers' &&
          <Beers
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            beers={beers}
            editBeer={editBeer}
            deleteBeer={deleteBeer}
            refetch={refetchBeers}
          />
        }
        { view == 'events' &&
          <Events
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            events={events}
            editEvent={editEvent}
            deleteEvent={deleteEvent}
            refetch={refetchEvents}
          />
        }
        { popup == 'newBeer' &&
          <NewBeer
            dispatch={dispatch}
            changePopup={changePopup}
            changeEdit={changeEdit}
            changeBeerValue={changeBeerValue}
            changeBeerImages={changeBeerImages}
            beer={beer}
            newBeer={newBeer}
            resetBeer={resetBeer}
            changeView={changeView}
            edit={edit}
            updateBeer={updateBeer}
            refetch={refetchBeers}
            deleteBeerImage={deleteBeerImage}
          >
          </NewBeer>
        }
        { popup == 'newEvent' &&
          <NewEvent
            dispatch={dispatch}
            changePopup={changePopup}
            changeEdit={changeEdit}
            changeEventValue={changeEventValue}
            event={event}
            newEvent={newEvent}
            resetEvent={resetEvent}
            changeView={changeView}
            edit={edit}
            updateEvent={updateEvent}
            refetch={refetchEvents}
          >
          </NewEvent>
        }
      </div>
    </>
  )
}

export default Admin
