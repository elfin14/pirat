const Profile = () => {
  return <div className='content'>
    <div className='content__img'>
      <img src='https://garsidej.files.wordpress.com/2016/05/coursework-1.jpg?w=768' />
    </div>
    <div className='content__personal'>
      <div className='content__avatar'>
        <img src='http://paraparabellum.ru/wp-content/uploads/2018/12/Kuda-ischezli-somalijjskie-piraty5.jpg' className='content__avatar-img' />
      </div>
      <div className='content__label'>
        <div className="content__label-name">
          Name:
        </div>
        <div className="content__label-birthday">
          Date of Birthday:
        </div>
        <div className="content__label-city">
          City:
        </div>
        <div className="content__label-education">
          Education:
        </div>
        <div className="content__label-weapon">
          Favorite weapon:
        </div>
      </div>
      <div className='content__info'>
        <div className='content__info-name'>
          Mgamu Numinok
          </div>
        <div className='content__info-birthday'>
          no one knows
        </div>
        <div className='content__info-city'>
          Brunumbu
        </div>
        <div className='content__info-city'>
          Brunumbu's school
        </div>
        <div className='content__info-city'>
          AK-47
        </div>
      </div>
    </div>
    <div className='content__posts'>
      <div className="content__posts-title">
        My posts
      </div>
      <textarea className='textarea' placeholder='Your post' cols='30' rows='3'>
      </textarea>
      <div className="content__posts-btn">
        <button type='submit' className='posts-btn'>Send</button>
      </div>
    </div>
  </div>;
}
export default Profile;