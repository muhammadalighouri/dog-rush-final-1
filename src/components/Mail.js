import React, { Component } from "react";

import Mailchimp from "react-mailchimp-form";

const checkBox = () => {
    return (
        <div className="email__container">
            <div className="grid">

                <Mailchimp
                    action="https://thetravelingdiarytour.us17.list-manage.com/subscribe/post?u=8a57cbfc52f621ac676850200&amp;id=77316c631a&amp;f_id=00d12ae0f0"
                    fields={[
                        {
                            name: "FNAME",
                            placeholder: "Enter First Name",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "LNAME",
                            placeholder: "Enter Last Name",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "PHONE",
                            placeholder: "Enter Contact Number",
                            type: "phone",
                            required: true,

                        },
                        {
                            name: "EMAIL",
                            placeholder: "Enter email",
                            type: "email",
                            required: true,

                        },
                        {
                            name: "MMERGE6",
                            placeholder: "Time",
                            type: "drop down",
                            required: true,

                        },


                    ]}
                />
            </div>
        </div>
    );
};
export default checkBox;
