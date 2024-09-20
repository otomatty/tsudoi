import { Component } from "solid-js";
import {
  OffersContainer,
  OfferCard,
  OfferTitle,
  OfferDescription,
} from "./SpecialOffers.styled";

const SpecialOffers: Component = () => {
  return (
    <OffersContainer>
      <OfferCard>
        <OfferTitle>年間契約で20%オフ</OfferTitle>
        <OfferDescription>
          スタンダードプランまたはプレミアムプランを年間契約でお申し込みいただくと、月額料金から20%割引いたします。
        </OfferDescription>
      </OfferCard>
      <OfferCard>
        <OfferTitle>NPO割引</OfferTitle>
        <OfferDescription>
          非営利団体の方は、スタンダードプランを50%割引でご利用いただけます。詳細はお問い合わせください。
        </OfferDescription>
      </OfferCard>
    </OffersContainer>
  );
};

export default SpecialOffers;
