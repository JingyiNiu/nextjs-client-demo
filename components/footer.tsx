const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={`bg-neutral-100 py-8 text-center`}>
            Copyright &copy; {currentYear} Jingyi Niu
        </footer>
    );
};

export default Footer;
