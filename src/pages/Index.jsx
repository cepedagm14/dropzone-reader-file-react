import { Card, CardContent, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import {Dropzone} from "../components/Dropzone"
const Index = () => {
  return (
    <Card sx={{ width: 800 }}>
      <CardContent>
        <Formik initialValues={{}} onsubmit={() => {}}>
          {({ values, errors }) => (
            <Form>
              <Grid container spacing={2} direction="column">
             <Dropzone/>
              </Grid>

              <pre>{JSON.stringify({ values, errors })}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default Index;
