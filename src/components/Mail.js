import React, { Component } from "react";

import Mailchimp from "react-mailchimp-form";

const checkBox = () => {
    return (
        <div className="email__container">
            <div className="grid">

                <Mailchimp
                    action="https://gmail.us21.list-manage.com/subscribe/post?u=1507b1926cf16506d47fa358f&amp;id=0a2bec43c4&amp;f_id=0043c3e1f0"
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
