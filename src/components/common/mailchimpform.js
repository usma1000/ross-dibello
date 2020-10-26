import React from "react"
import styled from "styled-components"

const MailchimpForm = () => (
  <div id="mc_embed_signup">
    <form
      action="https://rossdibello.us17.list-manage.com/subscribe/post?u=11c61bea0d975a92e32f962c5&amp;id=161a132776"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      novalidate
    >
      <FormGroup id="mc_embed_signup_scroll">
        <div className="mc-field-group" style={{ flex: "1" }}>
          <label htmlFor="mce-EMAIL" style={{ display: "none" }}>
            Email Address
          </label>
          <FormInput
            type="email"
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            placeholder="Your Email"
          />
        </div>
        <div id="mce-responses" className="clear">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          ></div>
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          ></div>
        </div>
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_11c61bea0d975a92e32f962c5_161a132776"
            tabindex="-1"
            value=""
          />
        </div>
        <div className="clear">
          <FormButton
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
          />
        </div>
      </FormGroup>
    </form>
  </div>
)

export default MailchimpForm

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

export const FormInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${(props) => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

export const FormButton = styled.input`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${(props) => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
