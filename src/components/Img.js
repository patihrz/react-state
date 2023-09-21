import './Img.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Img (){
  return(
    <div className="wrapper-card">
       <Card border="primary" style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>FREE FIRE</Card.Title>
          <img className='Img' src= 'https://cdn.antaranews.com/cache/1200x800/2022/06/20/Logo-Baru-Free-Fire.jpg' />
          <Button className='button'variant="outline-info" href='freefire.php'>BUY NOW!!!</Button>{' '}
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>PUBG:MOBILE</Card.Title>
          <img className='Img' src= 'https://play-lh.googleusercontent.com/3ohs9NzwVBY1Gvzo9xxayHenfpOkLWZ78DAfTu1YZNq1t1QCszDjy6OxjaUW-VRIUoE' />
          <Button className='button'variant="outline-info" href='pubg.php'>BUY NOW!!!</Button>{' '}
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>MOBILE LEGENDS</Card.Title>
          <img className='Img' src= 'https://play-lh.googleusercontent.com/UELcKakJhwKhdDJIwpdvd1RjE3ClRXiG0nhChs69fBv-nn5ZkgSp2EkkRTnJYFtYoZyu' />
          <Button className='button'variant="outline-info" href='mobilelegends.php'>BUY NOW!!!</Button>{' '}
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>POINT BLANK</Card.Title>
          <img className='Img' src= 'https://crm.vcgamers.com/uploads/product/20230811155851produk00.png ' />
          <Button className='button'variant="outline-info" href='pointblank.php'>BUY NOW!!!</Button>{' '}
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>GENSHIN IMPACT</Card.Title>
          <img className='Img' src= 'https://i0.wp.com/esportsnesia.com/wp-content/uploads/2020/11/Mengenal-Genshin-Impact-696x464.jpg ' />
          <Button className='button'variant="outline-info" href='genshinimpact.php'>BUY NOW!!!</Button>{' '}
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>COD:MOBILE</Card.Title>
          <img className='Img' src= 'https://w0.peakpx.com/wallpaper/188/106/HD-wallpaper-cod-mobile-black-callofduty-logo-simple.jpg ' />
          <Button className='button'variant="outline-info" href='callofduty.php'>BUY NOW!!!</Button>{' '}
        </Card.Body>
        </Card>
        <Card border="primary" style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>VALORANT</Card.Title>
          <img className='Img' src= 'https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png ' />
          <Button className='button'variant="outline-info" href='valorant.php'>BUY NOW!!!</Button>{' '}
        </Card.Body>
        </Card>
        <Card border="primary" style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>CLASH OF CLAN</Card.Title>
          <img className='Img' src= 'https://downloadr2.apkmirror.com/wp-content/uploads/2022/10/93/634a96621e6be.png ' />
          <Button className='button'variant="outline-info" href='clashofclan.php'>BUY NOW!!!</Button>{' '}
        </Card.Body>
        </Card>
    </div>
  )
}
export default Img