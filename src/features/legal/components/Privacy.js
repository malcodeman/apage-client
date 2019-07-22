import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";

import Header from "../../home/components/Header";
import Footer from "../../home/components/Footer";
import Title from "./Title";
import List from "./List";
import { NAME } from "../../../core/constants";
import { PRIVACY_MAIL } from "../constants/legalConstants";

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

const Link = styled.a`
  padding-bottom: 0.14rem;
  border-bottom: 2px solid currentColor;
  color: ${props => props.theme.brand};
  &:hover {
    color: ${props => props.theme.brandHover};
  }
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
          <List>
            {[
              "Create or register an account, and when you administer your account",
              "Input information or data into any of our Services, or post or upload Content to our Services",
              "Submit questions, requests, other communications to us via forms, email, or other communication media",
              "Contact us for customer support or technical support",
              "Visit any of our websites or download any of our apps",
              "Participate in any promotions, demonstrations, contests, surveys, or other marketing events",
              `Interact with other ${NAME} users and guests on our community forums`,
              `Integrate third-party products and services with your ${NAME} account`
            ]}
          </List>
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
          <Title level={2} mt={4} mb={1}>
            How we use the information we collect
          </Title>
          <Text>
            We use the information we collect for a variety of purposes, and how
            we use it depends on what we collect and what Services you use (or
            features of the Services). These purposes may include:
          </Text>
          <List>
            {[
              "Providing the Services to you",
              "Responding to requests or inquiries from you",
              "Providing customer support or technical assistance",
              "Contacting you to provide product updates, information about products you have requested or purchased",
              `Marketing ${NAME} products, services and features that you may be interested in, and monitoring the performance of our advertisements and marketing efforts`,
              `Creating or administering your account, including identifying you with your account or the account of an ${NAME} customer`,
              "Billing you",
              "Deriving market insights, ways to improve the Services, and other business analysis or research purposes",
              "Customizing existing and future product offerings and other aspects of the Services to you and other users",
              "Securing the Services and our systems, and protecting your information and data",
              `Sharing with third parties for the purposes discussed in "How we share information", below`,
              "Any legitimate business purpose, provided that the information is aggregated and anonymized"
            ]}
          </List>
          <Title level={2} mt={4} mb={1}>
            Personally Identifiable Information
          </Title>
          <Text>
            Specifically, we may use personally identifiable information
            (including those contained within the Customer Information or
            otherwise collected by us) for the above purposes, but only as to
            the extent necessary for the purposes for which you have provided us
            with the information, to respond to inquiries or requests (including
            requests for customer support or technical assistance), to otherwise
            perform our obligations or act consistently with our Terms of
            Service, to respond to law enforcement or other governmental or
            legal authorities, and to otherwise use the information consistent
            with your instructions to us (both explicit, such as when you
            contact us directly with a request, and implied, such as when you
            engage us to provide you with the Services). If you wish to change
            these instructions, either by request, by correcting, amending, or
            deleting information we may have collected about you, or by opting
            out of certain data collection practices, please see "Managing Your
            Information", below.
          </Text>
          <Title level={3} mt={4} mb={1}>
            Use of Content
          </Title>
          <Text>
            Notwithstanding anything else in this Privacy Policy to the
            contrary, we will not use or access your Content except in the
            following cases: for providing the Services to you; where you (or,
            if you are an end user, the {NAME} customer through which you have
            an account) explicitly approve access (e.g., during a customer
            support inquiry); where compelled to do so in response to lawful
            requests by law enforcement or government regulators; where
            necessary to ensure the stability and security of the Services and
            our systems (e.g., where we have reason to believe specific Content
            is degrading server stability); and where necessary to protect the
            rights, privacy, safety, or property of you, us, or others. We may
            also analyze metadata related to Content (such as total number of
            records, file size, API volume, access logs, etc.).
          </Text>
          <Title level={2} mt={4} mb={1}>
            How we share information
          </Title>
          <Text>
            We disclose information we collect in the following cases:
          </Text>
          <List>
            {[
              `You asked us to, or otherwise gave your specific consent (for example, by posting Content using the Universe feature, you consent to our sharing that Content with other ${NAME} users).`,
              "With vendors we engage to provide you with aspects of the Services, such as data storage, hosting, and payment processing.",
              `With third-party service providers who enable certain features or functionalities of the Services that you’ve requested (for example, by installing applications in ${NAME} using the Blocks feature).`,
              "With vendors we engage to help us gain insights and analytics into how the Services are used and how they might be improved (for example, we may use third-party data enrichment services to match Customer Information or other personally identifiable information we collect with publicly available database information in order to communicate more effectively with you).",
              "As necessary to comply with applicable law, including governmental requests, law enforcement requests, and otherwise to protect the rights, privacy, safety, or property of you, us, or others.",
              `As necessary in the event of a proposed or actual reorganization, merger, sale, joint venture, assignment, transfer, financing, or other disposition of all or any portion of ${NAME} business, assets, or stock.`,
              "With others for any legitimate business purpose, provided the information is aggregated and anonymized."
            ]}
          </List>
          <Title level={2} mt={4} mb={1}>
            How we secure your information
          </Title>
          <Text>
            We implement appropriate technical and organizational measures to
            protect the information we collect and store. Unfortunately, no
            security measures are 100% foolproof, and as such no network or
            system (including ours) can be guaranteed to be 100% secure against
            destruction, loss, alteration, unauthorized disclosure of, or access
            to information we collect and store. If you believe your information
            may not be secure for any reason, please contact us immediately at{" "}
            <Link href={`mailto:${PRIVACY_MAIL}`}>{PRIVACY_MAIL}</Link>.
          </Text>
          <Title level={2} mt={4} mb={1}>
            Managing Your Information
          </Title>
          <Text>
            You have many choices to access information we collect about you and
            about how we use or disclose that information. This section details
            many of those choices, including how you can exercise rights you may
            with respect to your information (including personally identifiable
            information), how you can opt out of collection and use of certain
            types of information for certain purposes (such as marketing), and
            how you can use your browser or third-party tools to disable certain
            collection methods (such as cookies or tracking technologies).
          </Text>
          <Text>
            You may access, correct, amend, or delete Content by accessing it
            within {NAME}. You control all Content you upload. Content you
            delete (including Content containing personal information) may be
            retained in archived or backup copies in order to enable you to use
            certain features like revision history and base snapshots. For
            instructions on how to permanently delete Content from your {NAME}
            account, please contact us at{" "}
            <Link href={`mailto:${PRIVACY_MAIL}`}>{PRIVACY_MAIL}</Link>. Please
            note that permanent deletion of Content through this process will
            impair or disable those features with respect to that Content.
          </Text>
          <Text>
            You may access, correct, amend, or delete Customer Information we
            have about you by logging into your account and navigating to your
            Account page. If you wish to cancel your account, you may do so
            through your Account page. If you do, personally identifiable
            information associated with your account will be deleted as soon as
            is reasonably practical or as required by applicable law. Please
            note that we may retain information that is otherwise deleted in
            anonymized and aggregated form, in archived or backup copies as
            required pursuant to records retention obligations, or otherwise as
            required by law.
          </Text>
          <Text>
            We may use some of the information we collect for marketing
            purposes, including to send you promotional communications about new
            {NAME} features, products, events, or other opportunities. If you
            wish to stop receiving these communications or to opt out of use of
            your information for these purposes, please follow the opt-out
            instructions by clicking "Unsubscribe" (or similar opt-out language)
            in those communications. You can also contact us at{" "}
            <Link href={`mailto:${PRIVACY_MAIL}`}>{PRIVACY_MAIL}</Link> to opt
            out.
          </Text>
          <Title level={3} mt={4} mb={1}>
            Cookies and Tracking Technologies – How to Opt Out
          </Title>
          <Text>
            If you would prefer not to accept cookies or otherwise wish to
            disable our use of tracking technologies, most browsers and mobile
            devices allow you to change your settings so as to notify you when
            you receive cookies or other tracking technologies are being used,
            and to choose whether or not to accept/allow it. Most browsers also
            allow you to disable or delete existing cookies or to automatically
            reject future cookies. Disabling cookies may limit your ability to
            use the Services.
          </Text>
          <Text>
            Certain tracking technologies we use are related to advertising
            networks, and through those technologies we may share certain
            information such as IP addresses. No personally identifiable
            information is shared with these advertising networks, but please
            note that the information we share with those advertising networks
            might be combined with other information about you that those
            networks may have collected from other sources. To learn more about
            advertising networks and how to opt out of sharing information with
            them, please click{" "}
            <Link href="http://optout.networkadvertising.org">here</Link> and{" "}
            <Link href="http://optout.aboutads.info">here</Link>. If you’re in
            the EU, you can find additional information about your choices with
            respect to advertising networks and online behavioral advertising by
            clicking <Link href="http://www.youronlinechoices.eu">here</Link>.
          </Text>
          <Text>
            Certain tracking technologies we use involve the use of session
            replay scripts or other scripts that run directly from your browser.
            If you wish to disable these tracking technologies, you can install
            a third-party browser analytics blocker plug-in such as{" "}
            <Link href="https://www.ghostery.com/products">Ghostery</Link>.
          </Text>
          <Text>
            If you have any questions about how we or our third-party service
            providers use cookies or other tracking technologies that aren’t
            answered in this Privacy Policy, please contact us at{" "}
            <Link href={`mailto:${PRIVACY_MAIL}`}>{PRIVACY_MAIL}</Link>.
          </Text>
          <Title level={2} mt={4} mb={1}>
            International Transfers (including Transfers Outside of the European
            Union)
          </Title>
          <Text>
            We process and store information on servers located in the United
            States, and we may store information on servers and equipment in
            other countries depending on a variety of factors, including the
            locations of our users and service providers. By using the Services,
            you consent to the transfer of information (including Customer
            Information, Content, and personally identifiable information) to
            locations that may be outside of your country of residence,
            including the United States. You acknowledge and agree that, as a
            condition of providing any Content, you can legally transfer it to
            the United States or another country.
          </Text>
          <Text>
            With respect to transfers of information out of the European Union
            (EU), we may process some personally identifiable information
            pursuant to data processing agreements that include the EU Standard
            Contractual Clauses. To learn more about our data processing
            agreements, please contact us at{" "}
            <Link href={`mailto:${PRIVACY_MAIL}`}>{PRIVACY_MAIL}</Link>.
          </Text>
          <Title level={2} mt={4} mb={1}>
            Information from Children
          </Title>
          <Text>
            Airtable is not directed to children under the age of 13 and we do
            not knowingly collect personally identifiable information from
            children under the age of 13. If we learn that we have collected
            personally identifiable information of a child under the age 13, we
            will take reasonable steps to delete such information from our files
            as soon as is practicable. Please contact us at{" "}
            <Link href={`mailto:${PRIVACY_MAIL}`}>{PRIVACY_MAIL}</Link> if you
            believe we have any information from or about a child under the age
            of 13.
          </Text>
          <Title level={2} mt={4} mb={1}>
            Changes to Privacy Policy
          </Title>
          <Text>
            Any information that we collect is subject to the Privacy Policy in
            effect at the time such information is collected. We may, however,
            revise the Privacy Policy from time to time. If a revision is
            material, as determined solely by us, we will notify you, for
            example via email. The current version will always be posted to our
            Privacy Policy page.
          </Text>
          <Text>
            If you have any questions about this Privacy Policy, please contact
            us at <Link href={`mailto:${PRIVACY_MAIL}`}>{PRIVACY_MAIL}</Link>.
          </Text>
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
}

export default compose(withTheme)(Privacy);
