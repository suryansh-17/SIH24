import React from 'react'
import Image from 'next/image'
import Link from 'next/link' // Use Link for navigation

const Footer = () => {
	return (
		<div>
			<footer
				style={{
					background:
						'linear-gradient(90deg, #30D8FF 0%, #A32CC4 50%, #C243FE 100%)',
					padding: '40px 60px',
				}}
			>
				<section
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div className='brand' style={{ textAlign: 'left' }}>
						<Link href='https://myriadflow.com/' passHref>
							<img
								src='/MFlogo.png'
								width={200}
								height={200}
								alt='logo'
								style={{ marginBottom: '20px' }}
							/>
						</Link>
						<p style={{ color: 'white', maxWidth: '350px', fontSize: '14px' }}>
							Innovative next-gen platform for exploring and launching NFT
							Xperiences with AI-powered brand ambassadors and no-code tools.
						</p>
						<p style={{ marginTop: '30px', color: 'white', fontSize: '12px' }}>
							© Copyright 2024 MyriadFlow. All rights reserved
						</p>
					</div>

					<div
						className='links'
						style={{ textAlign: 'left', color: 'white', fontSize: '14px' }}
					>
						<h3 className='text-2xl font-semibold'>About</h3>
						<Link
							href='/MyriadFlow_Terms_of_Service.pdf'
							target='_blank'
							style={{
								color: 'white',
								textDecoration: 'none',
								display: 'block',
								marginTop: '28px',
							}}
						>
							Terms of Service
						</Link>
						<Link
							href='/MyriadFlow_Creator_Terms_and_Conditions.pdf'
							target='_blank'
							style={{
								color: 'white',
								textDecoration: 'none',
								display: 'block',
							}}
						>
							Creator Terms and Conditions
						</Link>
						<Link
							href='/MyriadFlow_Privacy_Policy.pdf'
							target='_blank'
							style={{
								color: 'white',
								textDecoration: 'none',
								display: 'block',
							}}
						>
							Privacy Policy
						</Link>
						<Link
							href='/MyriadFlow_Community_Guidelines.pdf'
							target='_blank'
							style={{
								color: 'white',
								textDecoration: 'none',
								display: 'block',
							}}
						>
							Community Guidelines
						</Link>
					</div>

					<div
						className='platform'
						style={{ textAlign: 'left', color: 'white', fontSize: '14px' }}
					>
						<h3 className='text-2xl font-semibold'>Platform</h3>
						<Link
							href='https://studio.myriadflow.com'
							style={{
								color: 'white',
								textDecoration: 'none',
								display: 'block',
								marginTop: '28px',
							}}
						>
							Studio
						</Link>
						<Link
							href='https://discover.myriadflow.com'
							style={{
								color: 'white',
								textDecoration: 'none',
								display: 'block',
							}}
						>
							Discover
						</Link>
						<Link
							href='https://webxr.myriadflow.com'
							style={{
								color: 'white',
								textDecoration: 'none',
								display: 'block',
							}}
						>
							WebXR
						</Link>
					</div>

					<section
						id='connect'
						className='social-links'
						style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}
					>
						{[
							'/Vector3.png',
							'/Vector4.png',
							'/Vector2.png',
							'/Vector5.png',
						].map((icon, index) => (
							<div
								key={index}
								style={{
									borderRadius: '50%',
									border: '2px solid #0E46A3',
									padding: '16px',
									backgroundColor: '#15063C',
								}}
							>
								<Link href='#' target='_blank'>
									<img src={icon} width={20} height={20} alt='Social Icon' />
								</Link>
							</div>
						))}
					</section>
				</section>
			</footer>
		</div>
	)
}

export default Footer
