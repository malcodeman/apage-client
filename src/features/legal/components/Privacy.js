import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";

import Header from "../../home/components/Header";
import Footer from "../../home/components/Footer";
import Title from "./Title";
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

function Privacy(props) {
  const { theme } = props;

  return (
    <>
      <Header />
      <Wrapper>
        <Content>
          <Title level={2} mb={4} weight={500}>
            Privacy Policy
          </Title>
          <Title level={4} mb={0.5} color={theme.secondary}>
            Thanks for using {NAME}. Our goal is to empower individuals and
            organizations to structure and organize data. As such, we take very
            seriously the respect and protection of your privacy and security.
            We are committed to following and continuously evolving best
            practices to support this principle.
          </Title>
          <Title level={4} mb={0.5} color={theme.secondary}>
            We – meaning {NAME}, Inc., doing business as {NAME} (also "{NAME}
            ," "our" or "us") – prepared this Privacy Policy to help you
            understand our practices with respect to the collection, use, and
            disclosure of information we collect from you through {NAME}’s web
            or mobile applications (the "{NAME} Products"), our websites that
            link to this Privacy Policy, and any other services we provide to
            our customers or end users (collectively with the {NAME} Products,
            the "Services").
          </Title>
          <Title level={4} mb={0.5} color={theme.secondary}>
            By accessing or using the Services, you agree to this Privacy Policy
            and our Terms of Service.
          </Title>
          <Title level={2} mt={4} mb={1}>
            What Information We Collect
          </Title>
          <Text mb={1}>
            What types of information we collect from you depends on how you use
            the Services, what Services you use, and what information you choose
            to provide or make available to us. We collect information from you
            when you:
          </Text>
          <Title level={3} mt={4} mb={1}>
            Customer Information
          </Title>
          <Text>
            Information related to the creation of accounts or that otherwise
            identifies you as a customer or end user of {NAME} is what we call
            "Customer Information." Customer Information may include certain
            "personally identifiable information" or "PII", such as your name,
            email address, gender, postal address and phone number. It also may
            include payment information, such as payment method, credit card
            information, and any contact information (such as name and postal
            address) associated with payment billing information. If you are an
            end user using the Services through an account created on your
            behalf by an {NAME} customer (such as an employer, organization of
            which you are a member, or another individual), we may collect and
            process Customer Information about you on behalf of the {NAME}{" "}
            customer with whom your use of the Services is associated.
          </Text>
          <Text>
            When you create an account with {NAME}, we may collect certain
            Customer Information directly from you or, if you create your
            account using a third-party service (such as Google or a single
            sign-on service such as Okta), we may collect Customer Information
            about you from the third-party service (such as your username or
            user ID associated with that third-party service). By choosing to
            create an account using a third-party service, you authorize us to
            collect Customer Information necessary to authenticate your account
            with the third-party service provider.
          </Text>
          <Text>
            Certain aspects of the Services allow you to link or integrate
            third-party products and services to enable certain features and
            functionalities with the Services. For example, you can connect your
            Google Drive account so as to generate Content in {NAME} from
            information and data contained in your Google Drive or integrate
            with third-party services using Blocks. If you choose to use these
            features or functionalities, you may be asked to create an account
            with a third-party service provider or link your existing account
            with that service provider (and, by doing so, agree to the privacy
            policy and/or terms and conditions of that third-party). You may
            also be asked to authorize {NAME} to collect information from the
            third-party service provider on your behalf. We will then collect
            information (such as your username or user ID associated with that
            third-party service) from you and/or that third-party service
            provider as necessary to enable the Services to access your data and
            content stored with that third-party service provider. Once the
            authentication is complete, we have the ability to access
            information you provided to us or was otherwise collected by the
            third-party service in accordance with the privacy practices of that
            third-party service. We will store the information and data we
            collect and associate it with your {NAME} account, and we will only
            use that information and data to enable the integration of the
            Services with the third-party service provider and to perform
            actions requested or initiated by you, or that are reasonably
            necessary to carry out instructions provided by you.
          </Text>
          <Title level={3} mt={4} mb={1}>
            Content
          </Title>
          <Text>
            One of the core aspects of the {NAME} Products (and our related
            Services) is that you can upload any information, data, content,
            material – anything. We call anything you upload through the
            {NAME} Products "Content." You (and anyone who can interact with
            your use of the {NAME} Products) ultimately controls the nature of
            the Content, and our collection, use, and disclosure practices with
            respect to Content are separate from those with respect to other
            sorts of information we collect, including Customer Information. As
            explained in detail above, we may also upload Content automatically
            with your authorization from third-party service providers (such as
            from your Google Drive).
          </Text>
          <Title level={3} mt={4} mb={1}>
            Information collected automatically through your use of the Services
          </Title>
          <Text>
            We collect information about how you use the Services and your
            actions on the Services, including IP addresses, what software and
            hardware you use (such as browser types, operating systems, ISPs,
            platform type, device type, mobile device identifiers such as make
            and model, mobile carrier), pages or features of {NAME} used and
            associated dates and time stamps, search terms, links you click,
            whether you open messages sent to your account, and other statistics
            related to your usage of the Services. We may also use tools,
            including third-party tools, to collect analytics data. Some of this
            information is collected through the use of "cookies" and other
            tracking technologies, such as web beacons, session replay scripts,
            and similar technologies ("tracking technologies"). We may also work
            with third party partners to employ tracking technologies.
          </Text>
          <Text>
            If you would prefer not to accept cookies or otherwise wish to
            disable our use of tracking technologies, please see "Managing Your
            Information," below. Please note that doing so may negatively impact
            your experience using the Services, as some features may not work
            properly.
          </Text>
          <Title level={3} mt={4} mb={1}>
            Location information
          </Title>
          <Text>
            In some cases, we may collect limited location information. For
            example, we may use Google Analytics convert your IP address into a
            rough geolocation to understand in what areas our users are located
            and to improve and personalize {NAME} (for example, to display time
            data in the correct local time).
          </Text>
          <Title level={3} mt={4} mb={1}>
            Aggregated and anonymized information
          </Title>
          <Text>
            We may collect information by aggregating and anonymizing other
            information. The aggregation and anonymization process prevents the
            information from being reassociated or identified with any one
            customer account, user, or individual. We may use aggregated and
            anonymized information for a wide variety of statistical and
            analytical purposes.
          </Text>
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
}

export default compose(withTheme)(Privacy);
