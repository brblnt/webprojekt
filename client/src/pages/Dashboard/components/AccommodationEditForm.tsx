import React, { FC, useState } from "react";
import { Accommodation } from "../../../types/Accommodation";
import {
  FormControl,
  Input,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { everyCountry } from "../../../constants/everyCountry";

export interface AccommodationEditFormProps {
  accommodation: Accommodation;
}

export const AccommodationEditForm: FC<AccommodationEditFormProps> = ({
  accommodation,
}) => {
  const [accName, setAccName] = useState(accommodation.accommodationName);
  const [emailAddress, setEmailAddress] = useState(accommodation.emailAddress);
  const [phoneNumber, setPhoneNumber] = useState(accommodation.phoneNumber);
  const [accType, setAccType] = useState(accommodation.accommodationType);
  const [serviceType, setServiceType] = useState(accommodation.serviceTypes);
  const [addressId, setAddressId] = useState(accommodation.address.addressId);
  const [country, setCountry] = useState(accommodation.address.country);
  const [postalCode, setPostalCode] = useState(
    accommodation.address.city.postalCode
  );
  const [city, setCity] = useState(accommodation.address.city.cityName);
  const [addressName, setAddressName] = useState(
    accommodation.address.addressName
  );



  const accNameChange = (e: any) => {
    setAccName(e.target.value);
  };

  const emailAddressChange = (e: any) => {
    setEmailAddress(e.target.value);
  };

  const phoneNumberChange = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const accTypeChange = (e: any) => {
    setAccType(e.target.value);
  };

  const serviceTypeChange = (e: any) => {
    setServiceType(e.target.value);
  };

  const addressIdChange = (value: string) => {
    setAddressId(Number(value));
  };

  const countryChange = (e: any) => {
    setCountry(e.target.value);
  };

  const postalCodeChange = (e: any) => {
    setPostalCode(e.target.value);
  };

  const cityChange = (e: any) => {
    setCity(e.target.value);
  };

  const addressNameChange = (e: any) => {
    setAddressName(e.target.value);
  };

  return (
    <>
      <FormControl id="accName">
        <FormLabel mb={0}>Accommodation Name</FormLabel>
        <Input
          type="text"
          rounded="md"
          value={accName}
          onChange={accNameChange}
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel mb={0} mt={3}>
          Email Address
        </FormLabel>
        <Input
          type="text"
          rounded="md"
          value={emailAddress}
          onChange={emailAddressChange}
        />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel mb={0} mt={3}>
          Phone Number
        </FormLabel>
        <Input
          type="text"
          rounded="md"
          value={phoneNumber}
          onChange={phoneNumberChange}
        />
      </FormControl>
      <FormControl id="accType">
        <FormLabel mb={0}>Accommodation Type</FormLabel>
        <Select value={accType} onChange={accTypeChange}>
          <option value="SZALLODA">Szállóda</option>
          <option value="PANZIO">Panzió</option>
          <option value="KEMPING">Kemping</option>
          <option value="UDOLOHAZ">Üdülőház</option>
          <option value="EGYEB_SZALLASHELY">Egyéb Szálláshely</option>
          <option value="MAGANSZALLASHELY">Magán Szálláshely</option>
        </Select>
      </FormControl>
      <FormControl id="serviceType">
        <FormLabel mb={0}>Service Type</FormLabel>
        <Select value={serviceType} onChange={serviceTypeChange}>
          <option value="FEL_PANZIO">Fél Panzió</option>
          <option value="TELJES_PANZIO">Teljes Panzió</option>
          <option value="NINCS_ELLATAS">Nincs Ellátás</option>
        </Select>
      </FormControl>
      <FormControl id="addressId">
        <FormLabel mb={0} mt={3}>
          Address Id
        </FormLabel>
        <NumberInput rounded="md" value={addressId} onChange={addressIdChange} min={0}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl id="country">
        <FormLabel mb={0}>Country</FormLabel>
        <Select value={country} onChange={countryChange}>
          {everyCountry.map((country, index) => (
            <option key={index} value={country.value}>
              {country.text}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl id="postalCode">
        <FormLabel mb={0}>Postal Code</FormLabel>
        <Input
          type="text"
          rounded="md"
          value={postalCode}
          onChange={postalCodeChange}
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel mb={0}>City Name</FormLabel>
        <Input
          type="text"
          rounded="md"
          value={city}
          onChange={cityChange}
        />
      </FormControl>
      <FormControl id="addressName">
        <FormLabel mb={0}>Address Name</FormLabel>
        <Input
          type="text"
          rounded="md"
          value={addressName}
          onChange={addressNameChange}
        />
      </FormControl>
    </>
  );
};
