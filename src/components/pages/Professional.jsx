import '../../App.css';
import '../nav/Nav';
import Pdf from '../../files/DavidMoodyResume.pdf';

function Professional(){
    return (
        <div className='cont'>
            <div className='nav'>
                <ul>
                    <li>
                        <a href='https://github.com/moodyd' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    </li>
                    <li>
                        <a href={Pdf} target='_blank' rel='noopener noreferrer'>Resume</a>
                    </li>
                </ul>
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default Professional;