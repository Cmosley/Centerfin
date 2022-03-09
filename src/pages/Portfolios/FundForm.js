// import { Card, CardContent, Typography } from '@mui/material'
// import React from 'react'
// import { Form, Formik } from 'formik'

// export function FundForm() {
//   return (
//     <Card
//       sx={{
//         p: 1,
//         mb: 3,
//       }}
//     >
//       <Formik 
//         initialValues={{
//           fund: "", 
//           compare: "", 
//           benchmark: "", 
//         }}
//       <form onSubmit={() => handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={3}>
//             <Box p={1}>
//               {/* fund query */}
//               <Autocomplete
//                 fullWidth
//                 limitTags={1}
//                 sx={{
//                   m: 0,
//                 }}
//                 options={funds}
//                 getOptionLabel={(option) => option.name}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     sx={{
//                       m: 0,
//                     }}
//                     onChange={handleChange}
//                     id="fundQuery"
//                     name="fundQuery"
//                     value={values}
//                     placeholder={"Search by fund name..."}
//                     fullWidth
//                   />
//                 )}
//               />
//             </Box>
//           </Grid>
//           <Grid item xs={3}>
//             {/* compare query */}
//             <Box p={1}>
//               <Autocomplete
//                 sx={{
//                   m: 0,
//                 }}
//                 options={funds}
//                 getOptionLabel={(option) => option.name}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     sx={{
//                       m: 0,
//                     }}
//                     onChange={handleChange}
//                     placeholder={"Compare to "}
//                     id="compareQuery"
//                     name="compareQuery"
//                     value={values}
//                     fullWidth
//                     variant="outlined"
//                   />
//                 )}
//               />
//             </Box>
//           </Grid>
//           <Grid item xs={3}>
//             <Box p={1}>
//               {/* benchmark query */}
//               <Autocomplete
//                 sx={{
//                   m: 0,
//                 }}
//                 options={funds}
//                 getOptionLabel={(option) => option.name}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     sx={{
//                       m: 0,
//                     }}
//                     onChange={handleChange}
//                     id="benchmarkQuery"
//                     name="benchmarkQuery"
//                     placeholder={"Benchmark against"}
//                     value={values}
//                     fullWidth
//                     variant="outlined"
//                   />
//                 )}
//               />
//             </Box>
//           </Grid>
//           <Grid item xs={3}>
//             <Box mt={0.5} p={1}>
//               <Button type="submit" variant="contained">
//                 Search
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </form>
//     </Card>
//   );
// }

