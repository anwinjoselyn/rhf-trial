export const formValues: any = {
  person: {
    name: "",
    surname: "",
  },
  car: {
    model: "",
    insuranceData: {
      company: "",
      otherField: "",
    },
  },
};

export const formData: any[] = [
  {
    name: "person.name",
    required: true,
  },
  {
    name: "person.surname",
    required: false,
  },
  {
    name: "car.model",
    required: true,
  },
  {
    name: "car.insuranceData.company",
    required: true,
  },
  {
    name: "car.insuranceData.otherField",
    required: false,
  },
];
