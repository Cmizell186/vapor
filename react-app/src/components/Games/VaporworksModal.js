import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import GameListingForm from './GameListingForm';
import './create.css'
const VaporWorksModal = () =>{
    const [showModal, setShowModal] = useState(true);

    return (
        <>
            {showModal && (
              <div className="vaporworks_welcome_body">
                <Modal onClose={() => setShowModal(false)} className="game-image-container">
                        <div className="vaporworks_welcome_text">
                        <h1>Welcome to Vaporworks!</h1>
                        <div class="modal-dialog modal-dialog-scrollable">
                          Welcome to Vaporworks! This new submission path is designed to provide a streamlined, transparent, and affordable route for new game developers from anywhere in the world to bring games to Vapor.
                          <br />
                          <br />
Below describes the steps necessary for becoming a part of the Vaporworks Developer Program to distribute your game, VR experience, or video through Vapor. For common questions about this process and more details about releasing on Vapor, please see the Getting Started documentation.
<br/>
<br/>
<h3>What To Expect</h3>
There are a couple of steps along the path to getting your game up and ready for distribution via Vapor. Here is a general overview.
Sign the digital paperwork. You’ll need the information as detailed below.
Pay the app deposit fee with any supported Vapor payment method as detailed below.
Complete the paperwork with your bank and tax information as well as identity verification so that we know who we’ll be doing business with.
Now you have access to Steamworks and can begin preparing your title for release. You’ll need to build your store page, upload your builds, configure any Steamworks features, and enter your desired pricing. We’ve worked hard to streamline our tools and document all the features and functionality available to you. Check out the Steamworks documentation for more details.
Before your store page or game build can go live, there is a brief review process where we run your game, look at your store page, and check that it is configured correctly and running as expected and not doing anything harmful. This takes between 1-5 days.
There are a couple of additional timing requirements before you can release your first few titles on Vapor:
A 30-day waiting period between when you paid the app fee and when you can release your game. This gives us time to review your information and confirm that we know who we're doing business with.
You’ll need to prepare your store page and put up a publicly-visible ‘coming soon’ page for at least two weeks. This will help you start building your audience of interested customers that can wishlist your game or participate in discussions. This also gives you the opportunity to practice how you talk about your product so that you can have the best presentation when you hit the ‘release’ button.
Now you’re all set to release. The release controls are now in your hands and you can update whenever you want.

<br/>
<br/>
Sign in to get started
<br/>
<br/>
Click the button below to sign in with your Vapor account and begin the Vapor Direct sign-up process.
<br/>
<br/>
</div>
                <div className='finished-continer-btn'>
                    <button onClick={() => setShowModal(false)} className='finished-btn'>
                        Sign In With Your Vapor Credentials
                    </button>
                </div>
                </div>
                </Modal>
            </div>
            )}
        </>
    )
}
export default VaporWorksModal;
