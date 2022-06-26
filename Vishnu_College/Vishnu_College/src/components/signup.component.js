import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Student Club Registration</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Reg.no</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Club name</label>
                    <select  className="form-control">
                        <option value={0}>--Select--</option>
                        <option value={1}>Toastmasters Club </option>
                        <option value={2}>SDG Club</option>
                        <option value={3}>Sahaya Club</option>
                        <option value={4}>AAA Club</option>
                        <option value={5}>Eco Club</option>
                        <option value={6}>Idea Club </option>
                        <option value={7}>Painting Club</option>
                        <option value={8}>Music Club</option>
                        <option value={9}>MECOW Club</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
        );
    }
}