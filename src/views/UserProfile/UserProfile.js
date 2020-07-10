import React, { useState, useEffect } from "react";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { Form, } from 'react-bootstrap'
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();


  const [server, setServer] = useState({
    submitting: false,
    status: null

  })

  const [input, setInput] = useState({
    name: '',
    lastName: '',
    city: '',
    country: '',
    postalId: ''

  })




  const handelServerRespone = (ok, msg, form) => {
    setServer({
      submitting: true,
      status: { msg, ok }

    })
    if (ok) {
      form.reset()
    }


  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    setServer({ submitting: true })
    axios({
      method: 'post',
      url: "https://jsonplaceholder.typicode.com/users",
      data: new FormData(form)

    }).then(r => {
      handelServerRespone(true, "Thank you for your submiting", form)
    }).catch(r => {
      handelServerRespone(false, r.response.data.error, form)
    })

  }

  const handelChange = (event) => {
    event.persist();
    setInput((prev) => ({
      ...prev,
      [event.target.id]: [event.target.value]

    })
    )

  }


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>ویرایش اطلاعات </h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handelSubmit}>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="نام"
                      id="first-name"
                      formControlProps={{
                        fullWidth: true
                      }}

                      onChange={handelChange}
                      value={input.name}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="نام خانوادگی"
                      id="last-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      onChange={handelChange}
                      value={input.lastName}

                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="شهر"
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}

                      onChange={handelChange}
                      value={input.city}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="کشور"
                      id="country"
                      formControlProps={{
                        fullWidth: true
                      }}

                      onChange={handelChange}
                      value={input.country}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="آدرس"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true
                      }}
                      onChange={handelChange}
                      value={input.postalId}

                    />
                  </GridItem>
                </GridContainer>


                <Button type="submit" disabeld={server.submitting} color="primary">ثبت تغییرات </Button>

                {server.status && (
                  <p className={!server.status.ok ? "errorMsg" : ""}> {server.status.msg} </p>
                )}


              </Form>

            </CardBody>
            <CardFooter>

            </CardFooter>
          </Card>
        </GridItem>

      </GridContainer>
    </div>
  );
}
