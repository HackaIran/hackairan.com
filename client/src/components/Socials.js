import Social from './sub-components/Social';

class Socials extends React.Component {
    render() {

        return (
            <section className="socials">
                
                <h2 className="socials__header-title">
                    Also find us in
                </h2>

                <div className='socials__social-icons-wrapper'>
                    <Social icon={`telegram.svg`} link={`https://t.me/HackaIran`} />

                    <Social icon={`instagram.svg`} link={`https://www.instagram.com/hackairan/`} />
                </div>

            </section>
        )
    }
}

export default Socials