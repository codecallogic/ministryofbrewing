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
import NewFoodTruck from '../_components/_forms/foodTruck'
import FoodTrucks from '../_components/_admin/_dashboard/foodTrucks'

//// REDUCERS
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/app/_redux/features/authSlice";
import { changeView, changePopup, changeEdit } from "@/app/_redux/features/navigationSlice";
import { changeBeerValue, editBeer, changeBeerImages, resetBeer } from "../_redux/features/beerSlice";
import { changeEventValue, editEvent, changeEventImages, resetEvent } from "../_redux/features/eventSlice";
import { changeFoodTruckValue, editFoodTruck, changeFoodTruckImages, resetFoodTruck } from "../_redux/features/foodTruckSlice"

///// QUERIES
import GET_USER from '@/app/_queries/fetchUser'
import GET_BEERS from '@/app/_queries/fetchBeers'
import GET_EVENTS from '@/app/_queries/fetchEvents'
import GET_FOOD_TRUCKS from '@/app/_queries/fetchFoodTrucks'

///// MUTATIONS
import NEW_BEER from '@/app/_mutations/newBeer'
import UPDATE_BEER from '@/app/_mutations/updateBeer'
import DELETE_BEER from '@/app/_mutations/deleteBeer'
import DELETE_BEER_IMAGE from '@/app/_mutations/deleteBeerImage'
import NEW_EVENT from '@/app/_mutations/newEvent'
import UPDATE_EVENT from '@/app/_mutations/updateEvent'
import DELETE_EVENT from '@/app/_mutations/deleteEvent'
import DELETE_EVENT_IMAGE from '@/app/_mutations/deleteEventImage'
import NEW_FOOD_TRUCK from '@/app/_mutations/newFoodTruck'
import UPDATE_FOOD_TRUCK from '@/app/_mutations/updateFoodTruck'
import DELETE_FOOD_TRUCK from '@/app/_mutations/deleteFoodTruck'
import DELETE_FOOD_TRUCK_IMAGE from '@/app/_mutations/deleteFoodTruckImage'

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
  const [foodTruck, setFoodTruck]             = useState('')
  const [foodTrucks, setFoodTrucks]           = useState([])
  const currentNavigation                     = useSelector((state) => state.navigationReducer);
  const currentBeer                           = useSelector((state) => state.beerReducer);
  const currentEvent                          = useSelector((state) => state.eventReducer);
  const currentFoodTruck                      = useSelector((state) => state.foodTruckReducer)
  const [cookies, setCookie, removeCookie]    = useCookies(['adminToken', 'adminUser', 'view']);

  //// DATA
  const dataUser                              = useQuery(GET_USER, { variables: { id: cookies.adminUser ? cookies.adminUser.id : 'unknown', token: cookies.adminToken ? cookies.adminToken : 'unknown'}})
  const dataBeers                             = useQuery(GET_BEERS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataEvents                            = useQuery(GET_EVENTS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataFoodTrucks                        = useQuery(GET_FOOD_TRUCKS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})

  //// REFETCH
  const { refetch: refetchBeers  }            = useQuery(GET_BEERS, { variables: { id: cookies.adminUser ? cookies.adminUser.id : 'unknown', token: cookies.adminToken ? cookies.adminToken : 'unknown' } })
  const { refetch: refetchEvents  }           = useQuery(GET_EVENTS, { variables: { id: cookies.adminUser ? cookies.adminUser.id : 'unknown', token: cookies.adminToken ? cookies.adminToken : 'unknown' } })
  const { refetch: refetchFoodTrucks  }       = useQuery(GET_FOOD_TRUCKS, { variables: { id: cookies.adminUser ? cookies.adminUser.id : 'unknown', token: cookies.adminToken ? cookies.adminToken : 'unknown' } })

  //// MUTATIONS
  const [newBeer, { dataNewBeer, loadingNewBeer, errorNewBeer }] = useMutation(NEW_BEER, { refetchQueries: [ GET_BEERS ]})
  const [updateBeer, { dataUpdateBeer, loadingUpdateBeer, errorUpdateBeer}] = useMutation(UPDATE_BEER, { refetchQueries: [ GET_BEERS ]})
  const [deleteBeerImage, { dataDeleteBeerImage, loadingDeleteBeerImage, errorDeleteBeerImage}] = useMutation(DELETE_BEER_IMAGE, { refetchQueries: [ GET_BEERS ]})
  const [deleteBeer, { dataDeleteBeer, loadingDeleteBeer, errorDeleteBeer}] = useMutation(DELETE_BEER, { refetchQueries: [ GET_BEERS ]})

  const [newEvent, { dataNewEvent, loadingNewEvent, errorNewEvent }] = useMutation(NEW_EVENT, { refetchQueries: [ GET_EVENTS ]})
  const [updateEvent, { dataUpdateEvent, loadingUpdateEvent, errorUpdateEvent}] = useMutation(UPDATE_EVENT, { refetchQueries: [ GET_EVENTS ]})
  const [deleteEventImage, { dataDeleteEventImage, loadingDeleteEventImage, errorDeleteEventImage}] = useMutation(DELETE_EVENT_IMAGE, { refetchQueries: [ GET_EVENTS ]})
  const [deleteEvent, { dataDeleteEvent, loadingDeleteEvent, errorDeleteEvent}] = useMutation(DELETE_EVENT, { refetchQueries: [ GET_EVENTS ]})

  const [newFoodTruck, { dataNewFoodTruck, loadingNewFoodTruck, errorNewFoodTruck }] = useMutation(NEW_FOOD_TRUCK, { refetchQueries: [ GET_FOOD_TRUCKS ]})
  const [updateFoodTruck, { dataUpdateFoodTruck, loadingUpdateFoodTruck, errorUpdateFoodTruck}] = useMutation(UPDATE_FOOD_TRUCK, { refetchQueries: [ GET_FOOD_TRUCKS ]})
  const [deleteFoodTruck, { dataDeleteFoodTruck, loadingDeleteFoodTruck, errorDeleteFoodTruck }] = useMutation(DELETE_FOOD_TRUCK , { refetchQueries: [ GET_FOOD_TRUCKS ]})
  const [deleteFoodTruckImage, { dataDeleteFoodTruckImage, loadingDeleteFoodTruckImage, errorDeleteFoodTruckImage }] = useMutation(DELETE_FOOD_TRUCK_IMAGE, { refetchQueries: [ GET_FOOD_TRUCKS ]})

  useEffect(() => {

    setLoadingData(true)
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

  useEffect(() => {
    setFoodTruck(currentFoodTruck.value)
  }, [currentFoodTruck])

  //// LISTS

  useEffect(() => {
    if(dataBeers.data) setBeers(dataBeers.data.allBeers)
  }, [dataBeers])

  useEffect(() => {
    if(dataEvents.data) setEvents(dataEvents.data.allEvents)
  }, [dataEvents])

  useEffect(() => {
    if(dataFoodTrucks.data) setFoodTrucks(dataFoodTrucks.data.allFoodTrucks)
  }, [dataFoodTrucks])
  
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
            resetFoodTruck={resetFoodTruck}
            beers={beers}
            events={events}
            foodTrucks={foodTrucks}
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
            token={cookies.adminToken}
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
            token={cookies.adminToken}
          />
        }
        { view == 'foodTrucks' &&
          <FoodTrucks
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            foodTrucks={foodTrucks}
            editFoodTruck={editFoodTruck}
            deleteFoodTruck={deleteFoodTruck}
            refetch={refetchFoodTrucks}
            token={cookies.adminToken}
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
            token={cookies.adminToken}
          >
          </NewBeer>
        }
        { popup == 'newEvent' &&
          <NewEvent
            dispatch={dispatch}
            changePopup={changePopup}
            changeEdit={changeEdit}
            changeEventValue={changeEventValue}
            changeEventImages={changeEventImages}
            event={event}
            newEvent={newEvent}
            resetEvent={resetEvent}
            changeView={changeView}
            edit={edit}
            updateEvent={updateEvent}
            refetch={refetchEvents}
            deleteEventImage={deleteEventImage}
            token={cookies.adminToken}
          >
          </NewEvent>
        }
        { popup == 'newFoodTruck' &&
          <NewFoodTruck
            dispatch={dispatch}
            changePopup={changePopup}
            changeEdit={changeEdit}
            changeFoodTruckValue={changeFoodTruckValue}
            changeFoodTruckImages={changeFoodTruckImages}
            foodTruck={foodTruck}
            newFoodTruck={newFoodTruck}
            resetFoodTruck={resetFoodTruck}
            changeView={changeView}
            edit={edit}
            updateFoodTruck={updateFoodTruck}
            refetch={refetchFoodTrucks}
            deleteFoodTruckImage={deleteFoodTruckImage}
            token={cookies.adminToken}
          >
          </NewFoodTruck>
        }
        
      </div>
    </>
  )
}

export default Admin
