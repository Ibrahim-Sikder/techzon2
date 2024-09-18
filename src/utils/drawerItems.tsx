import { USER_ROLE } from "@/constant/role";
import { DrawerItem, userRole } from "@/types/common";
import {
  Apartment,
  BorderColor,
  Dashboard,
  DomainAdd,
  DriveFileRenameOutline,
  Group,
  Hotel,
  LocationCity,
} from "@mui/icons-material";

export const drawerItems = (role: userRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `super_admin`,
          icon: Dashboard,
        },

        {
          title: "Product Management",
          path: `super_admin/users`,
          icon: Group,
        },
        
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: Dashboard,
        },
        {
          title: "Products",
          path: `${role}/products`,
          icon: Dashboard,
        },
        {
          title: "Customer Support",
          path: `${role}/support`,
          icon: Dashboard,
        },
        
      );
      break;
    case USER_ROLE.MANAGER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: Dashboard,
        },
        
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
