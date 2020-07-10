import React, { useState, useEffect } from "react";
import axios from 'axios'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import Grid from '@material-ui/core/Grid';
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField';
import './TabelList.css'
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter.js";

import { Form, } from 'react-bootstrap'

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
const bgColor = '#0f58d6'

const useStyles = makeStyles(styles);

export default function TableList() {

  const classes = useStyles();

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })

  const [input, setInput] = useState({
    name: "",
    id: "",
    category: ""
  })

  const handelOnChange = event => {
    event.persist();
    setInput(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }))

  }

  const handelServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    })
    if (ok) {
      form.reset();
    }

  }

  const handelSubmit = e => {
    e.preventDefault();
    const form = e.target
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/users",
      data: new FormData(form)
    })
      .then(r => {
        handelServerResponse(true, "Thanks for your add", form)
        console.log(r)
      }).catch(r => {
        handelServerResponse(false, r.response.data.error, form)
        console.log(handelServerResponse, "something wrong")
      })

  }


  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>اضافه کردن محصول </h4>

          </CardHeader>
          <CardBody>
            <Form onSubmit={handelSubmit}>
              <GridItem xs={12} sm={12} md={6}>

                <Grid container spacing={3}>

                  <Grid item xs>


                    <CustomInput
                      style={{ padding: 20 }}
                      labelText="نام محصول"
                      id="name"
                      name="name"
                      type="text"
                      formControlProps={{
                        fullWidth: false,
                        required: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 1
                      }}

                      onChange={handelOnChange}
                      value={input.name}

                    />

                  </Grid>


                  <Grid item xs>


                    <CustomInput
                      style={{ padding: 20 }}
                      labelText="ایدی محصول"


                      formControlProps={{
                        fullWidth: false,
                        required: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 1
                      }}

                      id="id" type="number" name="id"
                      onChange={handelOnChange}
                      value={input.id}

                    />

                  </Grid>

                  <Grid item xs>

                    <CustomInput
                      style={{ padding: 20 }}
                      labelText="دسته بندی محصول"

                      formControlProps={{
                        fullWidth: false,
                        required: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 1
                      }}

                      id="category" type="text" name="category"
                      onChange={handelOnChange}
                      value={input.category}


                    />

                  </Grid>


                </Grid>
              </GridItem>

              <GridItem xs={12} sm={12} md={12} >

                <CustomInput
                  style={{ padding: 20 }}
                  labelText="توضیحات محصول"

                  formControlProps={{
                    fullWidth: true,
                    required: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}

                  id="description" type="text" name="description"
                />


              </GridItem>


              <GridItem xs={4} sm={4} md={4} >

                <Form>
                  <Form.File
                    style={{ padding: 20 }}
                    id="custom-file"
                    label="بار گزاری عکس محصول "
                    custom
                  />
                </Form>





              </GridItem>
              <Button type="submit" color="warning " disabled={serverState.submitting}>ثبت تغییرات </Button>
              {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                  {serverState.status.msg}
                </p>
              )}


            </Form>
          </CardBody>
          <CardFooter>


          </CardFooter>

        </Card>
      </GridItem>



    </GridContainer>
  );
}
