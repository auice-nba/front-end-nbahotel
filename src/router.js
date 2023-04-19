/* eslint-disable prettier/prettier */
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Scheduler from "@/pages/Scheduler.vue";
import BookingManager from "@/pages/BookingManager.vue";
import BookingDetail from "@/pages/BookingDetail.vue";
import RoomManager from "@/pages/RoomManager.vue";
import CreateRoom from "@/pages/CreateRoom.vue";
import HotelProfile from "@/pages/HotelProfile.vue";
import AddRoomFeature from "@/pages/AddRoomFeature.vue";
import UpdateRoomPicture from "@/pages/UpdateRoomPicture.vue";
import CreateRoomCompleted from "@/pages/CreateRoomCompleted.vue";
import UpdateRoom from "@/pages/UpdateRoom.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "dashboard",
    children: [
      {
        path: "scheduler",
        name: "Scheduler",
        component: Scheduler,
      },
      {
        path:"bookingmanager",
        name: "BookingManager",
        component: BookingManager,
      },
      {
        path:"bookingdetail/:id",
        name: "BookingDetail",
        component: BookingDetail,
      },
      {
        path: "roommanager",
        name: "RoomManager",
        component: RoomManager,
      },
      {
        path: "createroom",
        name: "CreateRoom",
        component: CreateRoom,
      },
      {
        path: "addroomfeature/:id",
        name: "AddRoomFeature",
        component: AddRoomFeature,
      },
      {
        path: "updateroompicture/:id",
        name: "UpdateRoomPicture",
        component: UpdateRoomPicture,
      },
      {
        path:"createroomcompleted/:id",
        name: "CreateRoomCompleted",
        component: CreateRoomCompleted,
      },
      {
        path:"updateroom/:id",
        name: "UpdateRoom",
        component: UpdateRoom,
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        component: Maps,
      },
      {
        path: "hotelprofile",
        name: "HotelProfile",
        component: HotelProfile,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "upgradeToPro",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
    ],
  },
];

export default routes;
