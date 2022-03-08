import { useRef, useState } from "react";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";
import Chart from "react-apexcharts";

import {
  Button,
  Card,
  Box,
  CardContent,
  CardHeader,
  Divider,
  Menu,
  MenuItem,
  CardActions,
  Grid,
  Typography,
  styled,
  useTheme,
  Tabs,
  Tab,
} from "@mui/material";

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      padding: 0;
      display: block;
`
);

const TabsContainerWrapper = styled(CardContent)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
`
);

const EmptyResultsWrapper = styled("img")(
  ({ theme }) => `
      max-width: 100%;
      width: auto;
      height: ${theme.spacing(17)};
      margin-top: ${theme.spacing(2)};
`
);

function PortfolioCharts() {
  const theme = useTheme();

  const periods = [
    {
      value: "today",
      text: "Today",
    },
    {
      value: "last_week",
      text: "Last Week",
    },
    {
      value: "last_month",
      text: "Last month",
    },
    {
      value: "ytd",
      text: "YTD",
    },
  ];

  const data = {
    users: 2.593,
    pagesSession: 2.66,
    newSessions: "82.05%",
    avgSessionDuration: "00:03:56",
    bounceRate: "49.75%",
    sessions: 9.381,
  };

  const actionRef1 = useRef(null);
  const [openPeriod, setOpenMenuPeriod] = useState(false);
  const [period, setPeriod] = useState("Select period");

  const [currentTab, setCurrentTab] = useState("vitals");

  const tabs = [
    { value: "vitals", label: "Vitals" },
    { value: "trading", label: "Trading" },
    { value: "performance", label: "Performance" },
    { value: "technicals", label: "Technicals" },
  ];

  const handleTabsChange = (_event, value) => {
    setCurrentTab(value);
  };

  const chartOptions = {
    stroke: {
      curve: "smooth",
      width: [0, 5],
    },
    theme: {
      mode: theme.palette.mode,
    },
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    markers: {
      hover: {
        sizeOffset: 2,
      },
      shape: "circle",
      size: 6,
      strokeWidth: 3,
      strokeOpacity: 1,
      strokeColors: theme.colors.alpha.white[100],
      colors: [theme.colors.error.main],
    },
    colors: [theme.colors.primary.main, theme.colors.error.main],
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
        columnWidth: "25%",
      },
    },
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      tickAmount: 6,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };

  const chartData = [
    {
      name: "Past Referrals",
      type: "column",
      data: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879],
    },
    {
      name: "Current Referrals",
      type: "line",
      data: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731],
    },
  ];

  return (
    <Card >
      <CardHeader
        action={
          <>
            <Button
              size="small"
              variant="outlined"
              ref={actionRef1}
              onClick={() => setOpenMenuPeriod(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {period}
            </Button>
            <Menu
              disableScrollLock
              anchorEl={actionRef1.current}
              onClose={() => setOpenMenuPeriod(false)}
              open={openPeriod}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {periods.map((_period) => (
                <MenuItem
                  key={_period.value}
                  onClick={() => {
                    setPeriod(_period.text);
                    setOpenMenuPeriod(false);
                  }}
                >
                  {_period.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        }
        title="Asset Vitals"
      />
      <Divider />
      <TabsContainerWrapper>
        <Tabs
          onChange={handleTabsChange}
          value={currentTab}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </TabsContainerWrapper>
      <Divider
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      />
      <CardContent>
        {currentTab === tabs[0].value && (
          <Chart
            options={chartOptions}
            series={chartData}
            type="line"
            height={306}
          />
        )}
        {currentTab === tabs[1].value && (
          <Chart
            options={chartOptions}
            series={chartData}
            type="line"
            height={306}
          />
        )}
        {currentTab === tabs[2].value && (
          <Chart
            options={chartOptions}
            series={chartData}
            type="line"
            height={306}
          />
        )}
        {currentTab === tabs[3].value && (
          <Chart
            options={chartOptions}
            series={chartData}
            type="line"
            height={306}
          />
        )}
      </CardContent>
      <Divider />
     
    </Card>
  );
}

export default PortfolioCharts;
