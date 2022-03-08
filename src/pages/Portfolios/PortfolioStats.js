import {
  Divider,
  Box,
  Card,
  Typography,
  alpha,
  Link,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  TableContainer,
  CardContent,
  styled,
  useTheme,
  Tabs,
  Tab,
} from "@mui/material";
import Text from "../../components/Text";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
  SparklinesSpots,
} from "react-sparklines";
import { useState } from "react";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import ArrowUpwardTwoToneIcon from "@mui/icons-material/ArrowUpwardTwoTone";
import ArrowDownwardTwoToneIcon from "@mui/icons-material/ArrowDownwardTwoTone";

const TableWrapper = styled(Table)(
  ({ theme }) => `

    thead tr th {
        border: 0;
    }

    tbody tr td {
        position: relative;
        border: 0;

        & > div {
            position: relative;
            z-index: 5;
        }

        &::before {
            position: absolute;
            left: 0;
            top: 0;
            transition: ${theme.transitions.create(["all"])};
            height: 100%;
            width: 100%;
            content: "";
            background: ${theme.colors.alpha.white[100]};
            border-top: 1px solid ${theme.colors.alpha.black[10]};
            border-bottom: 1px solid ${theme.colors.alpha.black[10]};
            pointer-events: none;
            z-index: 4;
        }

        &:first-of-type:before {
            border-top-left-radius: ${theme.general.borderRadius};
            border-bottom-left-radius: ${theme.general.borderRadius};
            border-left: 1px solid ${theme.colors.alpha.black[10]};
        }
        

        &:last-child:before {
            border-top-right-radius: ${theme.general.borderRadius};
            border-bottom-right-radius: ${theme.general.borderRadius};
            border-right: 1px solid ${theme.colors.alpha.black[10]};
        }
    }

    tbody tr:hover td::before {
        background: ${alpha(theme.colors.primary.main, 0.02)};
    }

  `
);

const TableRowDivider = styled(TableRow)(
  ({ theme }) => `
    height: ${theme.spacing(1)};
  `
);

const TabsContainerWrapper = styled(CardContent)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
`
);

const LabelWarning = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.palette.warning.main};
    color: ${theme.palette.warning.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 2)};
    border-radius: ${theme.general.borderRadius};
  `
);

const LabelError = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.palette.error.main};
    color: ${theme.palette.error.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 2)};
    border-radius: ${theme.general.borderRadius};
  `
);

const LabelSuccess = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.palette.success.main};
    color: ${theme.palette.success.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 2)};
    border-radius: ${theme.general.borderRadius};
  `
);

const TableHeadWrapper = styled(TableHead)(
  ({ theme }) => `
      .MuiTableCell-root {
          text-transform: none;
          font-weight: normal;
          color: ${theme.colors.alpha.black[100]};
          font-size: ${theme.typography.pxToRem(16)};
          padding: ${theme.spacing(1)};
      }

      .MuiTableRow-root {
          background: transparent;
      }
  `
);

function PortfolioStats({values}) {
  const [currentTab, setCurrentTab] = useState("performance");

  const theme = useTheme();

  const tabs = [
    { value: "performance", label: "Performance" },
    { value: "info", label: "Info" },
    { value: "risk", label: "Risk" },
  ];

  const handleTabsChange = (_event, value) => {
    setCurrentTab(value);
  };

  return (
    <Card>
      <Box
        px={3}
        py={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            gutterBottom
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`,
            }}
            variant="h4"
          >
            {"Fund Analysis"}
          </Typography>
          {/* <Typography variant="subtitle2">
            {"Reports for what we sold this week"}
          </Typography> */}
        </Box>
      </Box>
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
      <Box px={2} pb={2}>
        <TableContainer>
          {currentTab === tabs[0].value && (
            <TableWrapper>
              <TableHeadWrapper>
                <TableRow>
                  <TableCell>{"Funds"}</TableCell>
                  <TableCell align="center">{values.fundQuery}</TableCell>
                  <TableCell align="center">{values.compareQuery}</TableCell>
                  <TableCell align="center">{values.benchmarkQuery}</TableCell>
                </TableRow>
              </TableHeadWrapper>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle1" noWrap>
                        Name
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        $754
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        <Text color="error">-$3,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRowDivider />
                <TableRow>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle1" noWrap>
                        Asset Class
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        $754
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRowDivider />
                <TableRow>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle1" noWrap>
                        Category
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        $754
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle1" noWrap>
                        Fund Benchmark
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        $754
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRowDivider />
                <TableRow>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle1" noWrap>
                        Assets
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        $754
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRowDivider />
                <TableRow>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle1" noWrap>
                        Equity Holdings
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        $754
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Typography variant="h6" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </TableWrapper>
          )}
          {currentTab === tabs[1].value && (
            <TableWrapper>
              <TableHeadWrapper>
                <TableRow>
                  <TableCell>{"Employee"}</TableCell>
                  <TableCell align="left">"Income"</TableCell>
                  <TableCell align="center">"Expenses"</TableCell>
                  <TableCell align="center">"Status"</TableCell>
                  <TableCell align="center">"Trends"</TableCell>
                  <TableCell align="right">"Totals"</TableCell>
                </TableRow>
              </TableHeadWrapper>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle1" noWrap>
                        Bond Holdings
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="h4" noWrap>
                        $754
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="h4" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <LabelError>{"Overdue"}</LabelError>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Sparklines
                        margin={6}
                        data={[45, 56, 24, 56, 54, 38, 47, 38, 56, 24, 38]}
                      >
                        <SparklinesLine
                          style={{
                            stroke: theme.colors.primary.main,
                            strokeWidth: 3,
                            fill: "none",
                          }}
                        />
                        <SparklinesSpots
                          size={4}
                          style={{
                            fill: theme.colors.alpha.white[100],
                            stroke: theme.colors.primary.main,
                            strokeWidth: 3,
                          }}
                        />
                        <SparklinesReferenceLine
                          style={{
                            stroke: theme.colors.error.main,
                          }}
                          type="mean"
                        />
                      </Sparklines>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                        color="text.secondary"
                      >
                        <Typography
                          sx={{
                            pr: 0.5,
                          }}
                          component="span"
                          variant="h4"
                          color="text.primary"
                        >
                          $68,492
                        </Typography>
                        <ArrowUpwardTwoToneIcon
                          sx={{
                            opacity: 0.6,
                          }}
                        />
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRowDivider />
                <TableRow hover>
                  <TableCell>
                    <Box>
                      <Link href="#" variant="h4" noWrap>
                        Isaiah Ruiz
                      </Link>
                      <Typography variant="subtitle1" noWrap>
                        Senior Web Developer
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="h4" noWrap>
                        $654
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="h4" noWrap>
                        <Text color="warning">-$463</Text>
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <LabelWarning>{"Pending"}</LabelWarning>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Sparklines
                        margin={6}
                        data={[65, 34, 65, 77, 89, 54, 35, 87, 65, 94, 59, 54]}
                      >
                        <SparklinesLine
                          style={{
                            stroke: theme.colors.primary.main,
                            strokeWidth: 3,
                            fill: "none",
                          }}
                        />
                        <SparklinesSpots
                          size={4}
                          style={{
                            fill: theme.colors.alpha.white[100],
                            stroke: theme.colors.primary.main,
                            strokeWidth: 3,
                          }}
                        />
                        <SparklinesReferenceLine
                          style={{
                            stroke: theme.colors.error.main,
                          }}
                          type="mean"
                        />
                      </Sparklines>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                        color="text.secondary"
                      >
                        <Typography
                          sx={{
                            pr: 0.5,
                          }}
                          component="span"
                          variant="h4"
                          color="text.primary"
                        >
                          $68,492
                        </Typography>
                        <ArrowUpwardTwoToneIcon
                          sx={{
                            opacity: 0.6,
                          }}
                        />
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRowDivider />
                <TableRow hover>
                  <TableCell>
                    <Box>
                      <Link href="#" variant="h4" noWrap>
                        Beck Simpson
                      </Link>
                      <Typography variant="subtitle1" noWrap>
                        Senior Consultant
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="h4" noWrap>
                        $5,468
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="h4" noWrap>
                        <Text color="success">+$685</Text>
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <LabelSuccess>{"Done"}</LabelSuccess>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Sparklines
                        margin={6}
                        data={[65, 45, 37, 97, 56, 37, 47, 24, 38]}
                      >
                        <SparklinesLine
                          style={{
                            stroke: theme.colors.primary.main,
                            strokeWidth: 3,
                            fill: "none",
                          }}
                        />
                        <SparklinesSpots
                          size={4}
                          style={{
                            fill: theme.colors.alpha.white[100],
                            stroke: theme.colors.primary.main,
                            strokeWidth: 3,
                          }}
                        />
                        <SparklinesReferenceLine
                          style={{
                            stroke: theme.colors.error.main,
                          }}
                          type="mean"
                        />
                      </Sparklines>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                        color="text.secondary"
                      >
                        <Typography
                          sx={{
                            pr: 0.5,
                          }}
                          component="span"
                          variant="h4"
                        >
                          <Text color="error">$23,654</Text>
                        </Typography>
                        <Text flex color="error">
                          <ArrowDownwardTwoToneIcon />
                        </Text>
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </TableWrapper>
          )}
          {currentTab === tabs[2].value && (
            <TableWrapper>
              <TableHeadWrapper>
                <TableRow>
                  <TableCell>{"Employee"}</TableCell>
                  <TableCell align="left">"Income"</TableCell>
                  <TableCell align="center">"Expenses"</TableCell>
                  <TableCell align="center">"Status"</TableCell>
                  <TableCell align="center">"Trends"</TableCell>
                  <TableCell align="right">"Totals"</TableCell>
                </TableRow>
              </TableHeadWrapper>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box>
                      <Link href="#" variant="h4" noWrap>
                        Inez Conley
                      </Link>
                      <Typography variant="subtitle1" noWrap>
                        Project Manager
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="h4" noWrap>
                        $754
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="h4" noWrap>
                        <Text color="error">-$2,584</Text>
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <LabelError>{"Overdue"}</LabelError>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Sparklines
                        margin={6}
                        data={[45, 56, 24, 56, 54, 38, 47, 38, 56, 24, 38]}
                      >
                        <SparklinesLine
                          style={{
                            stroke: theme.colors.primary.main,
                            strokeWidth: 3,
                            fill: "none",
                          }}
                        />
                        <SparklinesSpots
                          size={4}
                          style={{
                            fill: theme.colors.alpha.white[100],
                            stroke: theme.colors.primary.main,
                            strokeWidth: 3,
                          }}
                        />
                        <SparklinesReferenceLine
                          style={{
                            stroke: theme.colors.error.main,
                          }}
                          type="mean"
                        />
                      </Sparklines>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                        color="text.secondary"
                      >
                        <Typography
                          sx={{
                            pr: 0.5,
                          }}
                          component="span"
                          variant="h4"
                          color="text.primary"
                        >
                          $68,492
                        </Typography>
                        <ArrowUpwardTwoToneIcon
                          sx={{
                            opacity: 0.6,
                          }}
                        />
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRowDivider />
                <TableRow hover>
                  <TableCell>
                    <Box>
                      <Link href="#" variant="h4" noWrap>
                        Isaiah Ruiz
                      </Link>
                      <Typography variant="subtitle1" noWrap>
                        Senior Web Developer
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="h4" noWrap>
                        $654
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="h4" noWrap>
                        <Text color="warning">-$463</Text>
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <LabelWarning>{"Pending"}</LabelWarning>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Sparklines
                        margin={6}
                        data={[65, 34, 65, 77, 89, 54, 35, 87, 65, 94, 59, 54]}
                      >
                        <SparklinesLine
                          style={{
                            stroke: theme.colors.primary.main,
                            strokeWidth: 3,
                            fill: "none",
                          }}
                        />
                        <SparklinesSpots
                          size={4}
                          style={{
                            fill: theme.colors.alpha.white[100],
                            stroke: theme.colors.primary.main,
                            strokeWidth: 3,
                          }}
                        />
                        <SparklinesReferenceLine
                          style={{
                            stroke: theme.colors.error.main,
                          }}
                          type="mean"
                        />
                      </Sparklines>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                        color="text.secondary"
                      >
                        <Typography
                          sx={{
                            pr: 0.5,
                          }}
                          component="span"
                          variant="h4"
                          color="text.primary"
                        >
                          $68,492
                        </Typography>
                        <ArrowUpwardTwoToneIcon
                          sx={{
                            opacity: 0.6,
                          }}
                        />
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRowDivider />
                <TableRow hover>
                  <TableCell>
                    <Box>
                      <Link href="#" variant="h4" noWrap>
                        Beck Simpson
                      </Link>
                      <Typography variant="subtitle1" noWrap>
                        Senior Consultant
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="h4" noWrap>
                        $5,468
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="h4" noWrap>
                        <Text color="success">+$685</Text>
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <LabelSuccess>{"Done"}</LabelSuccess>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Sparklines
                        margin={6}
                        data={[65, 45, 37, 97, 56, 37, 47, 24, 38]}
                      >
                        <SparklinesLine
                          style={{
                            stroke: theme.colors.primary.main,
                            strokeWidth: 3,
                            fill: "none",
                          }}
                        />
                        <SparklinesSpots
                          size={4}
                          style={{
                            fill: theme.colors.alpha.white[100],
                            stroke: theme.colors.primary.main,
                            strokeWidth: 3,
                          }}
                        />
                        <SparklinesReferenceLine
                          style={{
                            stroke: theme.colors.error.main,
                          }}
                          type="mean"
                        />
                      </Sparklines>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                        color="text.secondary"
                      >
                        <Typography
                          sx={{
                            pr: 0.5,
                          }}
                          component="span"
                          variant="h4"
                        >
                          <Text color="error">$23,654</Text>
                        </Typography>
                        <Text flex color="error">
                          <ArrowDownwardTwoToneIcon />
                        </Text>
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </TableWrapper>
          )}
        </TableContainer>
      </Box>
    </Card>
  );
}

export default PortfolioStats;
