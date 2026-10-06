import logoUrl from '../assets/logo.svg';

export const Header = () => (
  <header className="h-8 px-4 py-[7px] text-center shadow-[0_0_5px_#000]">
    <img src={logoUrl} alt="Retro composer" className="h-8" />
  </header>
);
