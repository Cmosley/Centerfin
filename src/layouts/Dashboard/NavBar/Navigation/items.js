import AnalyticsTwoToneIcon from "@mui/icons-material/AnalyticsTwoTone";
// import HealthAndSafetyTwoToneIcon from "@mui/icons-material/HealthAndSafetyTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import BackupTableTwoToneIcon from "@mui/icons-material/BackupTableTwoTone";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";

const menuItems = [
  {
    heading: "",
    items: [
      {
        name: "Clients",
        icon: BackupTableTwoToneIcon,
        badge: "v3",
        link: "/clients",
      },
      {
        name: "Portfolios",
        icon: AnalyticsTwoToneIcon,
        link: "/portfolios",
      },
      {
        name: "Analyzer",
        icon: AccountTreeTwoToneIcon,
        link: "/analyzer",
      },
    ],
  },
];

export default menuItems;
