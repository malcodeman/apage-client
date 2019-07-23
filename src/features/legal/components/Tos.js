import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";

import Header from "../../home/components/Header";
import Footer from "../../home/components/Footer";
import Title from "./Title";
import List from "./List";
import { NAME } from "../../../core/constants";

const Wrapper = styled.section`
  padding: 4rem 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const Content = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: ${props => props.theme.secondary};
`;

const StyledLink = styled(Link)`
  padding-bottom: 0.14rem;
  border-bottom: 2px solid currentColor;
  color: ${props => props.theme.brand};
  &:hover {
    color: ${props => props.theme.brandHover};
  }
`;

function Tos(props) {
  const { theme } = props;

  return (
    <>
      <Header />
      <Wrapper>
        <Content>
          <Title level={2} mb={4} weight={500}>
            Terms of Service
          </Title>
          <Title level={3} mb={0.5} color={theme.secondary}>
            Welcome to {NAME}! These Terms of Service (the “Terms”) and our{" "}
            <StyledLink to="/privacy">Privacy Policy</StyledLink> govern your
            access to and use of the {NAME} services and the {NAME} website,
            including any browser extensions, mobile applications and other
            downloadable apps we provide (collectively, “{NAME}”), so please
            read them carefully.
          </Title>
          <Text>
            By using {NAME}, you are agreeing to these Terms. If you do not
            agree to these Terms, do not use {NAME}. If you are using {NAME} on
            behalf of an organization such as your employer, you are agreeing to
            these Terms on behalf of that organization, and represent and
            warrant that you have the authority to agree to these terms on the
            organization's behalf. In that case, “you” and “your” will refer to
            that organization.
          </Text>
          <Text>
            We may periodically revise the Terms. If a revision is material, as
            determined solely by us, we will notify you for example via email.
            The current version of our Terms will always be posted on our Terms
            page, so please check back regularly. By continuing to use {NAME}{" "}
            after revisions become effective, you are agreeing to the revised
            Terms. If you do not agree to the revised Terms, please stop using{" "}
            {NAME}.
          </Text>
          <Title level={2} mt={4} mb={1}>
            Your {NAME} Account
          </Title>
          <Text>
            To use {NAME}, you'll need to create an account, either via {NAME}{" "}
            or through a third-party service such as Google. In the latter case,
            personal information you provided to that third party, such as your
            name, email address and other information your privacy settings on
            that service allow us to access, will be used to create your {NAME}{" "}
            account.
          </Text>
          <Text>
            You are responsible for safeguarding your {NAME} login credentials.
            You are responsible for activity on your account, whether or not you
            authorized that activity. You should immediately notify us of any
            unauthorized use of your account.
          </Text>
          <Title level={2} mt={4} mb={1}>
            Your Content
          </Title>
          <Text>
            By using {NAME}, you provide us with text, images, file attachments,
            and other information (“your content”). You retain full ownership of
            your content - what belongs to you stays yours.
          </Text>
          <Text>
            You can remove your content by deleting it. However, in certain
            instances, some of your content may not be completely removed (when
            your data is shared with someone else, for example). We are not
            responsible or liable for the removal or deletion of any of your
            content, or the failure to remove or delete such content.
          </Text>
          <Text>
            You are solely responsible for your content and indicate that you
            own or have the necessary rights to all of your content, and that
            use of your content does not infringe, misappropriate or violate a
            third party’s intellectual property rights, or rights of publicity
            or privacy, or result in the violation of any applicable law or
            regulation.
          </Text>
          <Title level={2} mt={4} mb={1}>
            Your Use of {NAME}
          </Title>
          <Text>
            {NAME} is owned by {NAME} Inc and its licensors and is protected by
            United States and international copyright, trademark, patent, trade
            secret and other intellectual property or proprietary rights laws.
          </Text>
          <Text>
            You may only use {NAME} as permitted by law, including all
            applicable federal, state, local or international laws and
            regulations. Do not, for example:
          </Text>
          <List>
            {[
              `Use any engine, software, tool, agent, device, mechanism or the like to access, search, or download intellectual property from ${NAME}, or use ${NAME} in any way other than through our publicly supported interfaces;`,
              `Access, tamper with, or use non-public areas of ${NAME}, ${NAME}’s computer systems, or the technical delivery systems of ${NAME}’s providers;`,
              `Probe, scan, or test the vulnerability of any ${NAME} system or network or breach any security or authentication measures;`,
              `Decipher, decompile, disassemble or reverse engineer any of the software used to provide ${NAME};`,
              `Plant malware or use ${NAME} to distribute malware;`,
              "Violate the privacy of others;",
              "Violate any applicable law or regulation;",
              "Impersonate or misrepresent your affiliation with any person or entity; or post or transmit anything that is fraudulent or misleading;",
              "Send unsolicited communications, promotions, advertisements or spam or otherwise infringe on others' rights;",
              `Interfere with the access of any user, host or network, including introducing any virus to, overloading, flooding, spamming, or mail-bombing ${NAME}, or introducing any other material or content which is malicious or technologically harmful;`,
              `Attack ${NAME} via a denial-of-service attack or a distributed denial-of-service attack; or otherwise attempt to interfere with the proper working of ${NAME};`,
              "Attempt any of the above, or encourage or enable any other individual to do any of the above."
            ]}
          </List>
          <Text>
            We have the right to investigate violations of these Terms and may
            also consult and cooperate with law enforcement authorities to
            prosecute users who violate the law.
          </Text>
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
}

export default compose(withTheme)(Tos);
