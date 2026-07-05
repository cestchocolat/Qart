const ENQUIRY_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzNmFKp71Uy9HerB85c-4S-AIpG8dHvLIkeMJGGfv8AZT9tT2Fvnv_cyiz9ls9XxBLN/exec";

export function getFormValue(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export function getSelectedOrOther(
  formData: FormData,
  selectName: string,
  otherName: string,
) {
  const selectedValue = getFormValue(formData, selectName);
  const otherValue = getFormValue(formData, otherName);

  return selectedValue === "Other" && otherValue ? otherValue : selectedValue;
}

export function createLeadPayload(payload: {
  inquiryType: string;
  residence: string;
  fullName: string;
  email: string;
  phone: string;
  preferredAreas: string;
  propertyType: string;
  bedrooms: string;
  petFriendly: string;
  budget: string;
  moveInDate: string;
  message: string;
}) {
  return {
    ...payload,
    name: payload.fullName,
    "full-name": payload.fullName,
    "Full Name Field": payload.fullName,
    interestedResidence: payload.residence,
    residence: payload.residence,
    inquiryType: payload.inquiryType,
    "Inquiry Type": payload.inquiryType,
    "Interested Residence": payload.residence,
    Name: payload.fullName,
    "Full Name": payload.fullName,
    "Email Address": payload.email,
    "WhatsApp / Phone Number": payload.phone,
    "Preferred Areas": payload.preferredAreas,
    "Property Type": payload.propertyType,
    "Pet Friendly": payload.petFriendly,
    budgetRange: payload.budget,
    budget: payload.budget,
    "Budget Range": payload.budget,
    "Move-in Date": payload.moveInDate,
    additionalRequirements: payload.message,
    message: payload.message,
    "Additional Requirements": payload.message,
  };
}

export async function postLead(payload: ReturnType<typeof createLeadPayload>) {
  await fetch(ENQUIRY_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });
}
