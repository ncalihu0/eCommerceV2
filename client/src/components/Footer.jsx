import React from 'react'
import Fbicon from '../images/fbicon.svg';
import Twicon from '../images/twicon.svg';
import validator from 'validator';
import { useState } from 'react';


export default function Footer() {
    const [status, setStatus] = useState("Subscribe");
    const handleSubmit = async (e) => {
        e.preventDefault();
        let email = e.target.email;
        if (!validator.isEmail(email.value)) {
            alert('Please enter valid email!')
        } else {
            alert('Thank you for subscribing!')
            email.value = '';
        }
    }

    return (
        <footer className="mainFooter">
            <section className="mainFooter_section1">
                <h3>Welcome to byShop</h3>
                <ul>
                    <li><a href="/">About byShop</a></li>
                    <li><a href="/">Store Locator</a></li>
                    <li><a href="/">Company</a></li>
                    <li><a href="/">Sustainability</a></li>
                </ul>
            </section>
            <section className="mainFooter_section2">
                <h3>More</h3>
                <ul>
                    <li><a href="/">Accessibility</a></li>
                    <li><a href="/">Terms & Conditions</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">CCPA Your Rights and Choices</a></li>
                </ul>
            </section>
            <section className="mainFooter_section3">
                <h3>Need Help?</h3>
                <ul>
                    <li><a href="/">My Account</a></li>
                    <li><a href="/">Exchange & Returns</a></li>
                    <li><a href="/Contact">Contact Us</a></li>
                    <li><a href="/">FAQ</a></li>
                </ul>
            </section>
            <section className="mainFooter_section4">
                <h3>Resources</h3>
                <ul>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Terms of Resources</a></li>
                    <li><a href="/">Copyright Info</a></li>
                    <li><a href="/">Do Not Sell or Share My Personal Information</a></li>
                </ul>
            </section>
            <section className="mainFooter_section5">
                <h3>Social Media</h3>
                <div className="mainFooterlinks">
                    <a href="/" target="_blank" title="Follow us on Facebook">
                        <img src={Fbicon} alt="Facebook Icon" />
                    </a>
                    <a href="/" target="_blank" title="Follow us on Twitter">
                        <img src={Twicon} alt="Twitter Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/nicole-calihua-hernandez-638b08222/" target="_blank"
                        title="Follow us on LinkedIn">
                        <img className="linkedinIcon"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEWsqqz///+pp6mnpafp6+nW1Nb8/Pyqqarw8vD+//6mqKb6+vqsrKyysbLQ09D19vXAwsDi4eLKzMrh4OHj5eO6u7rp5+nZ29nd39359/nPz8+3uLexsrHU1dTMysy3tbfBv8Hm4+bx7/HDxsOpBEKfAAANAElEQVR4nNWdiZaqOBCGISCLgNAIorLI4Pu/4wRXUBJSRWK4/8y0Z06rl+9mqUolqTJM5XKoYu+/fbGpN/TfYp9lh64LnJvU//GGyi8P4s7eb5q8NCzLIgPR/7W2YdS2Tb23uzhQCaqKMOi6rDi30Q3MYOhOG+VNfbS9QNGTKCGMD/u0vRgctk/QHrPIPBVtKZ+wO56Tnk4IbojpRrTTHmLZzyOZ0Nu0l8iA0r0pjcslteX2V5mEp02Op3tRulGZ2hK7qzTC07HdLqV7UZIw9XxJDyaF0I+71LBk8d0ht8nhJKUlZRB6x+vizjnBSMqNjCG5mNCx61YB3x0yav4WMy4k9O3zxVXE92DMFjIuIvQ7yqcO78HY7k+6COP6ohjvJtdoMz2Em+gXfDeRBG88sITBX2X9DJAihjssI47QsZsf4t0ZK+RwRBF6m0r1BDMl3HBEEDrHVgMelVudESsPOGHcRAoN4Axjm4FHI5TQ/2t14fUiEbgZgYTBD00Eg7HtVBJ2uY4Z5gMxPILWHBDCYK9vBA4VgnoqgDA+h7rZHrISQE8VJ/Qa/T30KXIRN43ChHarG2sot9qLDkZBQv/vJ8sIgKJacN0oRugXuo3Et8KdmPEXInR+7meLyLoKtaIIYdD8cqEkLisVWW0IEMbpKqzghMhVwDDOE8ar7KIPCSDOEnprBjTCxFtK2F11Q/DlzjriM4TxygGprjPTDZ/QadY6ybxFEj4il9BP12kmxiIt14HjETrFvwDY20We6ecR7tfnqjHE81E5hKtztjmq2R2VTXjIdT82QNEeThgnup8apIi5JGYRBuf1rOhFREqW5WcR7tdvCMciCcNFZRBm/8w0+pK1gxDGJawJwSegVMidHorThFfAExMSlnlbVtoxSTnZTycJC/FZhmyb4uB5XWdnda7yzIKIUlHCTtjUE9K8j7w4cZbrRQwLMULnKtqEpMzGvkSgOeBxsYUIN8JfOLHA3il8/nmR5ttB/Sa0hbtaOxVBqLVubkx4b1+EgXBcppwMkTha929I/vVQX4R/ol9mHacA+8CHTn+PfEXCPwlPon2UlKygug10F+QqPMwQCvuj1n8MQNOptTZiyycMhP3Rih2LzSqVCHMiH87bB+FZtAlJyl5Vx4lWq1jxCLut6NdYvE3YVOvakmzYhL54/Nea8B7ePUHv6rkaBVBHhAfxVaHL2y/Qa/UNox5O80NCH7AJE66Y0B2Z/SGhDQgfbnkbIrpjPGHNIIRsUmw549DRO9N8+G4DQruEfAnDZ+sVt7qDGmSwUHwTOjvIc5Er2x4etAfLh4G3N6H4yv4mtk/ja/Xa7hpEpd6EG9hzucw4uqe9k/Zd7LUUfhFCA4ifztFbxzUc8Hvb6xehDf2Lt6bCPn0Tlvo7KW3E+pPQh8eQokmDcVrJxnjofxCe4N/hTm6GQILJKvVaGjwJMTsxpPo6OX9K1rIxTvIPQpQJI1U9uqsTZCuYRp+y4hGhh3wyNy/s+G77g+7QrGnH6unXPAiF1/Zf32OUSVoXRbFJ2zXxUeX+gNBZ4mcR1wjD0NC9LfOlyBsQ2iv765ejekB41v0wKkRa/0UYrGgKlKj7TtSNUP9yR4nu24k3Qt2RI0VyU/9B6KzoNoxMkTZ+EHaaN6dfGiZakvFIVfYgXMfhGWKFSXOuj72Kusmr5alSbtHvnnCD+yrCkuAbR2+xqIsbvHN/+Y4T23W1MF/KbdPb6K8boL6HXOt6t9vUu3rzeqn7l899mXzX/6Z/0/uFfjIdTG9hOh1g9nbLule/vqOEXYv6NHPn4m88b31slLzUPR+eRA17py6ulzCG9o3QxtkKccLpuKP3eHSSc0Kv/ftS/M3VfieeEu5xtkISoZvOXXtx9ujID6kdSuggV05swnGf4BOKXCP0bexp3t4iGugdWybhHtCGYSF0FdTD7ipXHiU8IZ1SJmEm3IYkOgqmSPCQTonVUULxnW1BQuE2pIBifP27cacfSO0b5gEZHVs+DgGAXz1DlDB1DPOI7OLsXirYhoAb52Z/SgeDSFpKiA1CLSWMeWcdpv5GULNN5RgOdppa2kuh8o8Y78alhJCdXyFCwZkGLJRZs06Gg/X7lloLuDCNaHmGgzQWv29DM0bkjrFsI5ZOqGgcUhXw6ZQcDQ+7WbTU80bIg3dTUhiddEJl49A04XMNJbT/oTY0QQdi7n96bfyHXV7qIMzghKlRSCeE91K7OF/bttkc5xIknMDTohJCoLWI08GyIee7cgF4haGEEGQt/OMoRS/ZNtwVI4aw1joOg92nibO4cRvwQpgSIsPBcsZhMLEkIjxEsLnQ3Ib+9AExzuV6cPBaDaFwGzJu13DW/uDFrN5e6ifTnjTzWjaOUH4bClsL5mHBkBnfALeHXmvBnDbcHesj4KdVQzh2PJiEMbs6C7ObYgjRyRMWj0O2kzlxT/L5Geg6gRKCP/PUYmvBWShMX09FEdYqVk+CbZiyv7ti3VfBEMpf44v2Us4dJOZ9FThhYZy09VLOltn286ornjAzHG29lEPIvN0I3mTpCbFXWhe3Yct5LsY9ADihZSuIeYuOQ84fLJEwVrFvIdiGGEJwoMZyDHTiQKWErAUU2LaFjmFiXe/FvZSzu84kBPfSkhJinZqlbcg7W84kzIDBNpJQQqxTs9ha/KINydk0sGcA1LbhWdI4pIbVMGPsQY6F49DHEELb0O3P02AzHy3tpShCaBuW/ZkoBzmZLu2lKMI/2B4pSYP+5B58u+Omf6GXksK/nb7ETTVLoxgowgzWhr0Hb6CTrWgZh8A2jO4naJHHL5dGE7nWgpX9BkZ4i2j1J9kBSQRFCAXHYczZlJdF2HeFnhB3KWjpXPoDwrDfHugJcXks/gHC0n4Q4rKtaOmloLmUtMGTEHUmTmkbJozT3yCfhtyyfd4IPcxAXGotUISgXnrfpbvfIWVsc+EIBa2F8jYk7elNWMAB1Y5DGW1IEvNN2GHONUq6MwMiBI3D44DQRzhuqyeMggEh5ji7hPsWcEJAL3100ich4hzt2q3FM0PkM/MHPOmKnHtPQEJAG27NMSE84qbFWohHE8kzufcrxxB4GbzycUie28ivPFHgaI2eNhRONZ58ZlEyO+gpcT3jUJTwncf5RRhAd2gW33tS2obvhHnvjHTQy2GrJhxsC7wJoQEppb20XTjThO+HG+S+3MMaUcotWRZhvoxwGKsbEAJvoiq1FgsJq8FJhwGhD7vDqKUNxcbhqETCMActrBGXjkNebqqFbTg6gjvKBQ1qxKVzKYpQqA3HxfRGhDHEddNCKGbxR6eoxznZIUdwxXvp9NvU9dJ8dGVjTAi5k0L+4pMXxx79caI/vMf/eN7HJgE53397iu9veX6Emx697N4fGXx7LLJSJ+Ojmx+VAyDnacl269L/tsbWdemP/jWkP8LPBQ5x6e+sLf1F/1v3/krF7XD0/fTbwse3h/2n6etWYPH0XNszCIO1pIzCKzxxCU1b9wMulVX7fEJsLpe1iFw+D8F/VdLBZhFZib6vanzXewLm9V6XyHdZ2W9CzTVUFolMlCWbqEoGqiCwLk2Vlpsg9BEX+1eiibJrk9UBnfWXG59WOeVITlZ4xGxFrUBkspjBdJXO41ryjkNEmkmWacJ/o6j6WIwypKxqudhDpxrFqu3Dqnjcaa2dhhCz8A2zLvc60raKi3nHnUno1LqfGST25Wh29fgYUMFLu3J2gS02oen9O/XjK07CEA6h6WkttwlQyAHkEpoeNkvWb8WtVMgnROfF/Km4xSbnCJEZJ3+rmQyaM4S4g5m/1GyK0DlC51itOapBomIui+0cIUXEJ5tWr2g+D/EsoekA94Z/quN8prR5wq9LMOsRu640kJDOqKvsqDNmAkJIvRvdNBPiejJQwjX6qJNhJzyh2a1tpdGKJloWJTTjelWDMZlLsQgn7G3/ahDJbq6gAoawr/m8DkQSCphBFKHZrSLISCZrZ8ohNIOFdV+kAHJqtiwnpD211Qx4mXW1FxKa8VnjhEOMKzAbP4LQ9DNt8XByQeQkhhPeqjDpYCRuCm5AJKHp2Onvl8WkPM4X3ZFFSCfVvx+PRuICjLwMwt5w/BKRtMJemjTCWzGtH+GFJStDnVpC07d/UeKYhDnESZNKSKecrFHsq5IwKVATjCRCOhwP50qds0rcZo+cYKQR9qajLhdWYmTIMs7ZsvaTQ0jH42mfSKkbOhSxosKTUVVBBiGV79VbmZDEym2gh82SJMJeWRJJiR2TMCqLpaPvLYmE1EIe2zw0ljQlIeGl3aGt+5SkElLFxbmtDFSHJYREeVN7knrnU7IJqeKsbpLIAlESYoX5uf6TjWcqIaQKYvt4Ti5EBJPCkSo57w/ecsswJTWEvZw47uxzetlalsWoeUx/sy2bs915sbxqO59SR3iXQ9VlRZper+n9n+dLei6y2HmXcVal/wEhtM3kvBzVfQAAAABJRU5ErkJggg=="
                            alt="LinkedIn Icon" />
                    </a>
                </div>
                <article className="contact-info">

                    <div className="subbox">
                        <h2>Subscribe to our Newsletter</h2>
                        <form className="subscribe" onSubmit={handleSubmit}>
                            <input type="email" id="emailFooter" placeholder="Enter your email" name="email" />
                            <button className="button">{status}</button>
                        </form>

                        <p id="message"></p>
                    </div>


                </article>


            </section>
        </footer>
    )
}
