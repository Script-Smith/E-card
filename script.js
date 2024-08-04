function saveContact() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:Saurabh Agrawal
N;CHARSET=UTF-8:Agrawal;Saurabh;;;
GENDER:M
BDAY:19850314
EMAIL;CHARSET=UTF-8;type=WORK,INTERNET:saurabh.agrawal723@gmail.com
TEL;TYPE=WORK,VOICE:9826426723
ADR;CHARSET=UTF-8;TYPE=HOME:;;;Bhopal;;;
LABEL;CHARSET=UTF-8;TYPE=WORK:Alfa communication
ADR;CHARSET=UTF-8;TYPE=WORK:;;Chunabhatti kolar road.;Bhopal;M.P.;462042;India
ROLE;CHARSET=UTF-8:Founder
ORG;CHARSET=UTF-8:Alfa communication
URL;type=WORK;CHARSET=UTF-8:ampl.digital
X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/ssaurabh_agrawal/
REV:2024-07-31T09:56:39.806Z
END:VCARD
`;

  // Encode the vCard data as a Blob
  const blob = new Blob([vCardData], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);

  // Create a temporary link element
  const a = document.createElement("a");
  a.href = url;
  a.download = "Saurabh_Agrawal.vcf";

  // Append the link to the document body
  document.body.appendChild(a);

  // Programmatically click the link to trigger the download
  a.click();

  // Remove the link from the document
  document.body.removeChild(a);

  // Revoke the object URL to free up memory
  URL.revokeObjectURL(url);
}
