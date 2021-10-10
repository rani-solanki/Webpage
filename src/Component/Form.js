import  react, {Fragment} from 'react';

const Register = ()=>{
    return (
        <Fragment>
            <div style={{
                width: "40%",
                background: "white",
                padding: "2%",
                borderRadius: "3%"
            }}>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="User name" name='name'></input>
                    </div>
                    <div className="form-group">
                        <label>Driving school name</label>
                        <input type="email" className="form-control" placeholder="Enter email" name='email'/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="password" className="form-control" placeholder="Phone number" name='password'/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" name='email'></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="password" name='password'/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Join now</button>
                </form>
            </div>
        </Fragment>
    );
}
export default Register;
