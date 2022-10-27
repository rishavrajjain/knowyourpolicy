import React, { Fragment, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import { analyzePolicy, getCategories } from '../service';
import { showToast } from '../util/showToast';

export default function Dashboard(props) {


  const [loading, setLoading] = useState(false);
  const [policy, setPolicy] = useState('');
  const [categories, setCategories] = useState();
  const [result, setResult] = useState(null);

  const submit = async (e) => {
    e.preventDefault();


    if (policy === '') {
      showToast('ERROR', 'Empty policy');
      return;
    }

    setLoading(true);
    try {
      const analysis = await analyzePolicy(policy);


      setResult(analysis.data);

    } catch (err) {
      console.log(err);
      showToast('ERROR', 'Something went wrong, Please try again!')
    }
    setLoading(false);
  }


  return (
    <div>
      <Navbar isLoggedIn={props.isLoggedIn}></Navbar>

      <div className='container' style={{ marginTop: '6rem' }}>
        <div className="form-group">
          <h3>Policy</h3>
          <textarea className="form-control" rows="12" onChange={(e) => setPolicy(e.target.value)}></textarea>
          <button className='btn btn-block btn-success btn-login-submit' onClick={submit} >Submit</button>
        </div>
      </div>
      <div className='container'>

        {

          <ul>
            {result && result.data && result.data.mainSentences && result.data.mainSentences.length ? <div>
              <h3>Summary</h3>

              {
                result.data.mainSentences.map((result) => {

                  return (
                    <li>
                      <h6>{result.value}</h6>
                    </li>
                  )
                })
              }
            </div> : <div></div>
            }
          </ul>

        }
        <hr></hr>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            {

              <ul>
                {result && result.data && result.data.entities && result.data.entities.length ? <div>
                  <h4>Entites</h4>

                  {
                    result.data.entities.map((result) => {

                      return (
                        <li>
                          <h6>{result.lemma}</h6>
                        </li>
                      )
                    })
                  }
                </div> : <div></div>
                }
              </ul>

            }
          </div>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            {
              result && result.data && result.data.topics && result.data.topics.length ? <div>
                <ul>
                  {
                    result.data.topics.map((result) => {
                      return (
                        <Fragment>

                          <h3 className='badge badge-info' style={{ marginRight: '0.3rem' }}><i className='fa fa-tags'></i>{'  '}{result.label}</h3>
                        </Fragment>
                      )
                    })
                  }
                </ul>

              </div> : <div></div>
            }
          </div>
        </div>






      </div>

    </div>
  )
}
