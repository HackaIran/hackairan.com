import Social from './sub-components/Social';

class Socials extends React.Component {
    render() {

        return (
            <section className="hackaSocials">
                
                <h2 className="hackaSocials__header-title">
                    Also find us at
                </h2>

                <div className='hackaSocials__social-icons-wrapper'>
                    <Social icon={`telegram.svg`} link={`https://t.me/HackaIran`} />

                    <Social icon={`instagram.svg`} link={`https://www.instagram.com/hackairan/`} />
                </div>

            </section>
        )
    }
}

export default Socials