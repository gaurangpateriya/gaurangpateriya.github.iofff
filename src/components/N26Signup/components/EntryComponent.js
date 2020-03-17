
import React, { Component } from 'react';
import '../N26Signup.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import TextField from '@material-ui/core/TextField';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const country_list = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];

class EntryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      cursor: 0,
      typedcountry: '',
      country:""
    };
    this.searchResult = [];
    this.updateUserDetails = this.updateUserDetails.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentWillMount() {
    this.setState({ userDetails: this.props.details.userDetails });
  }

  updateUserDetails(e) {
    e.preventDefault();
    this.state.userDetails = {...this.state.userDetails,country:this.state.country}
    this.props.details.updateSequence(this.state.userDetails, this.props.details.index);
  }

  
  handleKeyDown(e) {
    const { cursor,  } = this.state
    console.log(e.keyCode)
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < this.searchResult.length - 1) {
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
    } 
    if( e.keyCode === 13  ){
        // console.log(this.searchResult[cursor])
        this.selectCounty(this.searchResult[cursor])
    }
  }

  selectCounty(country){
    this.searchResult = []
    this.setState({typedcountry:country,country:country})
  }
  renderSearchBox() {
    const { cursor } = this.state
    return (
      <div className="search-box">
        {this.searchResult.map((s, i) => (
          <div className={i===cursor?`selected-entry`:'search-entry'} onClick={()=>this.selectCounty(s)}>
            <h3>{s}</h3>
          </div>
        ))}
      </div>
    );
  }

  filterCountry(country) {
    this.searchResult = country_list.filter((c) => c.toLowerCase().includes(country.toLowerCase()));
    this.setState({ typedcountry: country });
  }

  render() {
    const {
      firstName, LastName, county, dob,
    } = this.state.userDetails;
    return (
      <div className="outer-div">
        <div className="hv hw hx">
          <h2 tabIndex="-1" className="b">Start loving your bank</h2>
          <p className="cd ic">Open your N26 account in 8 minutes.</p>
          <div className=" w-60 ">
            <div className="flex" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <figure className="svg-figure">
                <span title="Confirm your email address" className="svg-icon-span">
                  <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="svg-icon">
                    <g fill="none" fillRule="evenodd">
                      <path className="background" fill="rgb(227, 238, 241)" d="M19.3 0h5.4c5.679 0 8.507.743 11.115 2.137a14.538 14.538 0 0 1 6.048 6.048C43.257 10.793 44 13.621 44 19.301v5.398c0 5.68-.743 8.508-2.137 11.116a14.538 14.538 0 0 1-6.048 6.048C33.207 43.257 30.379 44 24.699 44h-5.398c-5.68 0-8.508-.743-11.116-2.137a14.538 14.538 0 0 1-6.048-6.048C.743 33.207 0 30.379 0 24.699v-5.398c0-5.68.743-8.508 2.137-11.116a14.538 14.538 0 0 1 6.048-6.048C10.793.743 13.621 0 19.301 0z" />
                      <g stroke="rgb(38, 102, 120)" strokeWidth="1.5">
                        <path d="M12.923 15h18.154c.669 0 .911.07 1.156.2.244.131.436.323.567.567.13.245.2.487.2 1.156v11.154c0 .669-.07.911-.2 1.156-.131.244-.323.436-.567.567-.245.13-.487.2-1.156.2H12.923c-.669 0-.911-.07-1.156-.2a1.363 1.363 0 0 1-.567-.567c-.13-.245-.2-.487-.2-1.156V16.923c0-.669.07-.911.2-1.156.131-.244.323-.436.567-.567.245-.13.487-.2 1.156-.2z" />
                        <path d="M11 15l9.991 9.083a1.5 1.5 0 0 0 2.018 0L33 15M11 30l8.24-7.49M33 30l-8.31-7.554" />
                      </g>
                    </g>
                  </svg>
                </span>
                <figcaption className="b mt2" id="caption-confirm-email">Confirm your email address</figcaption>
              </figure>
              <figure className="svg-figure">
                <span title="Download the app" className="svg-icon-span">
                  <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="svg-icon">
                    <g fill="none" fillRule="evenodd">
                      <path className="background" fill="rgb(228, 242, 239)" d="M19.3 0h5.4c5.679 0 8.507.743 11.115 2.137a14.538 14.538 0 0 1 6.048 6.048C43.257 10.793 44 13.621 44 19.301v5.398c0 5.68-.743 8.508-2.137 11.116a14.538 14.538 0 0 1-6.048 6.048C33.207 43.257 30.379 44 24.699 44h-5.398c-5.68 0-8.508-.743-11.116-2.137a14.538 14.538 0 0 1-6.048-6.048C.743 33.207 0 30.379 0 24.699v-5.398c0-5.68.743-8.508 2.137-11.116a14.538 14.538 0 0 1 6.048-6.048C10.793.743 13.621 0 19.301 0z" />
                      <path fill="rgb(54, 161, 139)" d="M25.125 15.743h1.765v12.202h-2.271l-5.022-8.479c-.323-.56-.54-.992-.723-1.484h-.035c.035.43.052.877.052 1.616v8.347h-1.789V15.743h2.295l5.021 8.479c.323.56.54.992.724 1.484h.035a18.99 18.99 0 0 1-.053-1.615v-8.348zM17 32.68v-1.573h10v1.573H17zm0-20.099V11h10v1.581H17z" />
                    </g>
                  </svg>
                </span>
                <figcaption className="b mt2" id="caption-download-app">Download the app</figcaption>
              </figure>
              <figure className="w-25 gb" className="svg-figure">
                <span title="Verify your identity" className="svg-icon-span">
                  <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="svg-icon">
                    <g fill="none" fillRule="evenodd">
                      <path className="background" fill="rgb(242, 233, 218)" d="M19.3 0h5.4c5.679 0 8.507.743 11.115 2.137a14.538 14.538 0 0 1 6.048 6.048C43.257 10.793 44 13.621 44 19.301v5.398c0 5.68-.743 8.508-2.137 11.116a14.538 14.538 0 0 1-6.048 6.048C33.207 43.257 30.379 44 24.699 44h-5.398c-5.68 0-8.508-.743-11.116-2.137a14.538 14.538 0 0 1-6.048-6.048C.743 33.207 0 30.379 0 24.699v-5.398c0-5.68.743-8.508 2.137-11.116a14.538 14.538 0 0 1 6.048-6.048C10.793.743 13.621 0 19.301 0z" />
                      <g fillRule="nonzero" transform="translate(12 11)">
                        <rect width="12" height="17" x="5.937" stroke="rgb(205, 163, 95)" strokeWidth="1.5" rx="1.5" />
                        <g transform="rotate(-14 22.243 2.731)">
                          <rect width="12" height="17" className="glyph" fill="rgb(242, 233, 218)" stroke="rgb(205, 163, 95)" strokeWidth="1.5" rx="1.5" />
                          <path fill="rgb(205, 163, 95)" d="M2.015 3.121h8v1.5h-8zM2.015 7.121h8v1.5h-8zM2.015 11.121h5.22l-.648 1.5H2.015z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <figcaption className="b mt2" id="caption-verify-identity">Verify your identity</figcaption>
              </figure>
              <figure className="w-25 gc" className="svg-figure">
                <span title="Get your N26 debit card">
                  <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="svg-icon">
                    <g fill="none" fillRule="evenodd">
                      <path className="background" fill="rgb(242, 228, 228)" d="M19.3 0h5.4c5.679 0 8.507.743 11.115 2.137a14.538 14.538 0 0 1 6.048 6.048C43.257 10.793 44 13.621 44 19.301v5.398c0 5.68-.743 8.508-2.137 11.116a14.538 14.538 0 0 1-6.048 6.048C33.207 43.257 30.379 44 24.699 44h-5.398c-5.68 0-8.508-.743-11.116-2.137a14.538 14.538 0 0 1-6.048-6.048C.743 33.207 0 30.379 0 24.699v-5.398c0-5.68.743-8.508 2.137-11.116a14.538 14.538 0 0 1 6.048-6.048C10.793.743 13.621 0 19.301 0z" />
                      <g fillRule="nonzero" transform="translate(11 15)">
                        <rect width="22" height="14" stroke="rgb(203, 124, 122)" strokeWidth="1.5" rx="2" />
                        <rect width="4" height="3" x="3" y="5" fill="#CB7C7A" rx="1" />
                      </g>
                    </g>
                  </svg>
                </span>
                <figcaption className="b mt2" id="caption-receive-card">Get your N26 debit card</figcaption>
              </figure>
            </div>
            
              <div>
                <div className="input-label-div">
                  <input
                    type="text"
                    name="county"
                    className="inp"
                    required
                    value={this.state.typedcountry}
                    onChange={(e) => this.filterCountry(e.target.value)}
                    onKeyDown={ this.handleKeyDown }
                    // onKeyPress={this.handleKeyDown}
                    
                  />
                  <label className="inp-label">
                    Country of Residence
                  </label>
                </div>
              </div>
              <div style={{position:'relative'}}>
              {
                  this.searchResult.length > 0 ? this.renderSearchBox() : null
              }
              </div>
              <div className=" flex">
                <select type="button" className="lang-sel">
                  <option value="English">

                      English

                  </option>

                  <option value="Deutsch">
                  Deutsch

                  </option>

                  <option value="Francais">

                  Francais
                  </option>

                  <option value="Espanol">
                  Espanol
                  </option>

                  <option value="Italiano">
                  Italiano
                  </option>
                </select>


                <button type="submit" className="continue-btn  pointer  " onClick={this.updateUserDetails}>Get Started</button>
              </div>
            

          </div>
        </div>


      </div>
    );
  }
}

// console.log("in the admin mstp func", state)
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryComponent);
