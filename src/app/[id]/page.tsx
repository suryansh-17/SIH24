'use client'
import { InfoCard } from '@/components/info-card'
import Image from 'next/image'
import { Avatar } from '@readyplayerme/visage'
import { useAccount } from 'wagmi'
import { ConnectWallet } from '@/components/connect-wallet'
import { useEffect, useState } from 'react'
import { ConnectWalletModal } from '@/components/connect-wallet-modal'
import { MintedModal } from '@/components/minted-modal'
import { ClaimNft } from '@/components/claim-nft'
import { toast } from 'react-toastify'

import { VoiceAssistant } from '@/components/voice-assistant'
import { useQueries, useQuery } from '@tanstack/react-query'
import {
	getAvatars,
	getPhygital,
	getProfileByWallet,
	getWebXR,
} from '@/utils/queries'
import { AvatarType } from '@/types/types'

export default function Home({ params }: { params: { id: string } }) {
	const { id } = params
	const [unlockModal, setUnlockModal] = useState(false)
	const [unlockClaimed, setUnlockClaimed] = useState(false)

	const account = useAccount()

	const profileImage = 'QmcKFdgcuhmAQRniKwkua5aF9iuKSMJUtQekhLDNyTDfE3'

	const results = useQueries({
		queries: [
			{
				queryKey: ['phygital'],
				queryFn: () => getPhygital(id),
			},
			{
				queryKey: ['webxr'],
				queryFn: () => getWebXR(id),
			},
			{
				queryKey: ['avatar'],
				queryFn: async () => {
					const avatars = await getAvatars()
					return avatars.find((avatar: AvatarType) => avatar.phygital_id === id)
				},
			},
		],
	})

	const [phygitalResult, webxrResult, avatarResult] = results

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setUnlockClaimed(true)
	// 	}, 60000)
	// }, [])

	const closeClaimed = () => {
		setUnlockClaimed(false)
	}

	const removePrefix = (uri: any) => {
		return uri?.substring(7, uri.length)
	}

	if (
		phygitalResult.isLoading ||
		webxrResult.isLoading ||
		avatarResult.isLoading
	)
		return (
			<div className='h-screen flex flex-col justify-center items-center'>
				<Image src={'/spinner.svg'} alt='loading' height={120} width={120} />
			</div>
		)

	if (phygitalResult.isError || webxrResult.isError || avatarResult.isError)
		return toast.error('Error fetching data')

	const phygital = phygitalResult.data
	const webxr = webxrResult.data
	const avatar = avatarResult.data

	return (
		<main className='flex h-screen flex-col items-center justify-between p-24 relative'>
			<header className='absolute top-0 p-4 w-full flex justify-between z-10'>
				<Image src='/logo.png' alt='logo' height={150} width={250} />
				<div className='flex gap-4'>
					<Image
						src={
							profileImage
								? `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${profileImage}`
								: '/profile.png'
						}
						alt='Profile'
						className='mr-[4px] size-[40px] rounded-[30px]'
						height={0}
						width={0}
					/>

					<ConnectWallet />
				</div>
			</header>

			<a-scene className='h-48'>
				<a-sky
					src={
						webxr.image360 !== 'undefined' &&
						`${'https://nftstorage.link/ipfs'}/${removePrefix(webxr.image360)}`
					}
					rotation='0 -130 0'
				></a-sky>
			</a-scene>
			<section>
				<div className='absolute right-2 bottom-2'>
					<InfoCard phygital={phygital} />
				</div>

				<div className='absolute transform -translate-x-1/2 text-white bottom-2'>
					<VoiceAssistant
						productInfo={phygital}
						brandName={phygital.brand_name}
						voice={avatar.avatar_voice}
					/>
				</div>
				<div className='absolute h-3/4 left-4 bottom-16'>
					<Avatar modelSrc={avatar && avatar.url} cameraInitialDistance={3.5} />
					<button className='border-2 border-white text-white bg-black mx-auto flex item-center gap-4 justify-center bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-full px-8 py-2'>
						{account.address ? 'Customize' : 'Unlock'}
					</button>
				</div>
				{/* {!account.address && (
					<div className='modal w-2/6'>
						<ConnectWalletModal />
					</div>
				)}
			 */}
				{/* <div className='modal'>
					<MintedModal
						onClose={closeCongratulations}
						phygitalName={phygital.name}
					/>
				</div> */}

				{unlockClaimed && (
					<div className='modal w-3/6'>
						<ClaimNft
							onClose={closeClaimed}
							freeNft={webxr.free_nft_image}
							brandName={phygital.brand_name}
							phygitalName={phygital.name}
							contractAddress={phygital.contract_address}
							chainTypeId={phygital.chaintype_id}
							collectionId={phygital.collection_id}
							phygitalId={phygital.id}
						/>
					</div>
				)}
			</section>
		</main>
	)
}
