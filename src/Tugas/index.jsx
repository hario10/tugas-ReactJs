import { useEffect } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Nav, Navbar, Container } from 'react-bootstrap';
import axios from 'axios';


const Effect = () => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState([]);
    // const [dataSearch, setDataSearch] = useState('');
    
    
    useEffect(() => {
        // fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=a18da3f1c1fe4f25b1c98cc7854e2f73&i')
        // .then (respon => respon.json())
        // .then (respon => setNews(respon.articles));
        getNewsData()
    }, [])

    const getNewsData = async () => {
      try {
        const {data} = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=a968ef77142546548223fe7ce49e0ed7&i')
        setNews(data.articles);
      } catch (error) {
         console.log(error, 'data error');
      }
    }
    const ubahData = (e) => {
      if(ubahData) {
        return setSearch(e.target.value);
      } else {
        return ''
      }
      
    }

    const handleSubmit = async (e) => {
          try {
            e.preventDefault()
            const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=a968ef77142546548223fe7ce49e0ed7&q=${search}`)
              setNews(data.articles)
            } catch (error) {
                console.log(error, 'Data error');
            }
    }

      return (
        <div className='row' >
          <div className="navigasi">
            <Navbar bg="primary" variant="dark" style={{position: 'fixed', zIndex: '9999', width: '100%'}}>
                  <Container>
                      <Navbar.Brand>F.R.C News</Navbar.Brand>
                      <Nav className="me-auto">
                      <Nav.Link onClick={getNewsData}>Home</Nav.Link>
                      </Nav>
                  </Container>
              </Navbar>
          </div>
          <div className="container" style={{display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '60px'}}>
          <Form className="d-flex mt-4" onSubmit={handleSubmit} style={{width: '1000px', height: '40px'}}>
              <Form.Control 
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={ubahData}
              />
              <Button type='Submit' variant="outline-success" style={{width: '150px'}}>Search</Button>
            </Form>
          </div>

        <div className='container row' style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                {
                news && news.map( (e, index) => (
                  <Card key={index} style={{ width: '18rem'}} className='mt-4 mx-2'>
                    <Card.Img variant="top" src={e.urlToImage} />
                    <Card.Body>
                      <Card.Title>
                          <h5 className="card-title">{e.title}</h5>   
                          <h6 className="card-subtitle mb-2 text-muted mt-2">{e.author} - {e.publishedAt}</h6>
                      </Card.Title>
                      <Card.Text>
                          <p className="card-text mt-3">{e.description}</p>
                      </Card.Text>
                      <Button href={e.url} variant="primary">Kunjungi</Button>
                    </Card.Body>
                  </Card>
                ))
              }
            </div>
      </div>
     );
}
export default Effect;