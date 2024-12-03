import s from './Footer.module.scss';
import face from '../../assets/face.png'
import Xwiter from '../../assets/twiter.png'
import tutube from '../../assets/tutube.png'
import linke from '../../assets/linkedin.png'
import insta from '../../assets/insta.png'
export default function Footer() {
  return (
    <footer>
        <section className={s.pee}>
        <section className={s.firstSection}>
        <div className={s.canto}><p className={s.para}>4002-8922</p></div>
        <nav className={s.imagas}>
            <img className={s.imu}src={face} alt="" />
            <img className={s.imu}src={Xwiter} alt="" />
            <img className={s.imu}src={tutube} alt="" />
            <img className={s.imu}src={linke} alt="" />
            <img className={s.imu}src={insta} alt="" />
        </nav>
      </section>
        </section>
    

      <section className={s.secondSection}>
        <p className={s.test}>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}