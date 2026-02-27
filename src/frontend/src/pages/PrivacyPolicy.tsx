export default function PrivacyPolicy() {
  return (
    <section className="bg-cream py-12 md:py-20" aria-label="Privacy Policy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-gold" />
            <span className="text-gold font-sans font-semibold text-sm uppercase tracking-widest">
              Legal
            </span>
          </div>
          <h1 className="font-heading font-bold text-navy text-3xl md:text-4xl leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-sans text-stone-500 text-base">
            Empower Southwest is committed to protecting your privacy.
          </p>
          <div className="mt-6 h-px bg-stone-200" />
        </div>

        {/* Policy Content */}
        <article
          className="bg-white border border-stone-200 shadow-xs px-8 py-10 font-sans text-stone-700 text-base leading-relaxed space-y-6"
          style={{ borderRadius: '4px' }}
        >
          <p className="font-heading font-bold text-navy text-xl">Your privacy is important.</p>

          <p>This privacy notice discloses our privacy practices.</p>

          <div>
            <p className="font-bold text-navy mb-2">INFORMATION COLLECTION, USE, AND SHARING:</p>
            <p>
              We are the sole owners of the information collected. We only have access to information that you voluntarily
              give us via email, text, form, or other direct contact from you. We will use your information to respond to
              you, regarding the reason you contacted us. We may share information about you as follows or as otherwise
              described in this Privacy Policy: with vendors, service providers, volunteers, and campaign staff or
              assignees who need access to such information to carry out work on our behalf; with organizations,
              candidates, campaigns, groups, or causes that we believe have similar political viewpoints, principles, or
              objectives or share similar goals and with organizations that facilitate communications and information
              sharing among such groups; we may also share aggregated or de-identified information that cannot reasonably
              be used by other third parties to identify you. The above excludes text messaging originator opt-in data
              and consent, which information will not be shared with any third parties, provided that the foregoing does
              not apply to sharing (1) with vendors, reputable consultants and other service providers who need access to
              such information to carry out work on our behalf (and who will not use such information for their own
              purposes); (2) if we believe disclosure is required by any applicable law, rule, or regulation or to comply
              with law enforcement or legal process; and (3) if the user consents to our sharing of such information.
              When you register, contribute, sign up to volunteer, or take any other action, we may ask you to give us
              contact information, including your name, address, telephone number and/or email address. We may obtain
              information about you from outside sources and add it to or combine it with this information. We use your
              e-mail address to send such information by email and may use your telephone number to contact you.
            </p>
          </div>

          <div>
            <p className="font-bold text-navy mb-2">YOUR ACCESS TO AND CONTROL OVER INFORMATION:</p>
            <p>
              You may opt out of any future contacts from us at any time. You can do the following at any time by
              contacting us via the contact page on our website: inform us of any data we have about you, have us delete
              any data we have about you, and express any concern you have about our use of your data.
            </p>
          </div>

          <div>
            <p className="font-bold text-navy mb-2">HOW TO UNSUBSCRIBE OR OPT OUT:</p>
            <p>
              You may opt out of receiving promotional emails or text messages from us by following the instructions in
              those emails or text messages. If you opt out, we may still send you non-promotional emails, such as those
              about your account or our ongoing campaign relations. With your consent, we may send promotional and
              non-promotional push notifications or alerts to your mobile device. You can deactivate these messages at
              any time by changing the notification settings on your mobile device.
            </p>
          </div>

          <div>
            <p className="font-bold text-navy mb-2">SECURITY:</p>
            <p>
              We use industry standard security measures to protect against the loss, misuse, or alteration of the
              information under our control. Permission to access your information is granted only to you and our
              employees or contractors who need to know that information to provide services to you. Although we make
              good faith efforts to store information collected by this website in a secure operating environment, we
              cannot guarantee complete security.
            </p>
          </div>

          <div>
            <p className="font-bold text-navy mb-2">HOW WE NOTIFY YOU ABOUT PRIVACY POLICY CHANGES:</p>
            <p>
              We may revise and update this Privacy Policy if we change our practices. We will notify registered users
              by email and post notice to this site of any substantive changes to our Privacy Policy. All the above
              categories exclude text messaging originator opt-in data and consent; this information will not be shared
              with any third parties. These Terms of Service (&ldquo;Terms&rdquo;) apply to your access to and use of
              the websites, mobile applications, and other online offerings (collectively, the &ldquo;Sites&rdquo;)
              provided by Empower Southwest (the &ldquo;Committee,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;). By
              accessing or by using the Sites, you agree to these Terms, and any terms incorporated by reference. If you
              do not agree to these Terms, do not use the Sites.
            </p>
          </div>

          <div>
            <p className="font-bold text-navy mb-2">CONSENT TO RECEIVE TEXT MESSAGES:</p>
            <p>
              By providing your mobile number and opting in, you agree to be contacted by or on behalf of Empower
              Southwest at the provided mobile number. This includes text messages for informational, product, or
              service-related purposes (e.g., donation requests, community events, advocacy actions, etc.). Message
              frequency varies, and standard message and data rates may apply. To stop receiving text messages, reply
              with the word STOP. We may confirm your opt-out by text message.
            </p>
          </div>
        </article>

        {/* Back Link */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-sans font-medium text-navy hover:text-gold text-sm uppercase tracking-wider transition-colors duration-200"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
