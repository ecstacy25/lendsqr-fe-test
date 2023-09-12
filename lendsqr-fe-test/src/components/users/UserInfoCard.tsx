import React, { FC } from 'react'

interface Props {
}

const UserInfoCard:FC<Props> = () => {
  return (
		<div className="user-info-card">
			<h2>Personal Information</h2>
			<div className='user-info-main'>
				<div>
					<p>FULL NAME</p>
					<p>Ibiam Arua</p>
				</div>
				<div>
					<p>Phone Number</p>
					<p>07066026820</p>
				</div>
				<div>
					<p>Email Address</p>
					<p>ibiamjnr9@gmail.com</p>
				</div>
				<div>
					<p>Bvn</p>
					<p>0706602682</p>
				</div>
				<div>
					<p>Gender</p>
					<p>Male</p>
				</div>
				<div>
					<p>Marital status</p>
					<p>Single</p>
				</div>
				<div>
					<p>Children</p>
					<p>None</p>
				</div>
				<div>
					<p>Type of residence</p>
					<p>Parent’s Apartment</p>
				</div>
			</div>
		</div>
	);
}

export default UserInfoCard