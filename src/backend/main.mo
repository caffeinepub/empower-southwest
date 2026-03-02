import List "mo:core/List";
import Migration "migration";

(with migration = Migration.run)
actor {
  type Signup = {
    fullName : Text;
    zipCode : Text;
    cellPhone : Text;
    smsOptIn : Bool;
  };

  let signups = List.empty<Signup>();

  public shared ({ caller }) func submitSignup(fullName : Text, zipCode : Text, cellPhone : Text, smsOptIn : Bool) : async () {
    let newSignup : Signup = {
      fullName;
      zipCode;
      cellPhone;
      smsOptIn;
    };
    signups.add(newSignup);
  };

  public shared ({ caller }) func getAllSignups() : async [Signup] {
    signups.toArray();
  };
};
