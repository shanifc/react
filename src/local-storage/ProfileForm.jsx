import React from "react";
import "./profileForm.css"; // You can rename the CSS file to ProfileForm.css if you like

function ProfileForm() {
    return (
        <div className="container fade-in">
            <div className="left">
                <div className="icon"></div>
                <h2>Let's get you set up</h2>
                <p>It should only take a couple of minutes to pair with your watch.</p>
            </div>

            <div className="right">
                <form>
                    <label>Name</label>
                    <input type="text" placeholder="Your name" />

                    <label>Gender</label>
                    <div className="radio-group">
                        <label><input type="radio" name="gender" /> Male</label>
                        <label><input type="radio" name="gender" /> Female</label>
                    </div>

                    <label>Date of Birth</label>
                    <input type="date" />

                    <label>Email</label>
                    <input type="email" placeholder="email@example.com" />

                    <label>Mobile</label>
                    <input type="tel" placeholder="+Phone number" />

                    <label>Customer ID</label>
                    <input type="text" placeholder="578392-BNS9345-45" />

                    <label>Membership</label>
                    <div className="radio-group">
                        <label><input type="radio" name="membership" /> Classic</label>
                        <label><input type="radio" name="membership" /> Silver</label>
                        <label><input type="radio" name="membership" /> Gold</label>
                    </div>

                    <div className="buttons">
                        <button type="button" className="cancel">Cancel</button>
                        <button type="submit" className="save">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileForm;