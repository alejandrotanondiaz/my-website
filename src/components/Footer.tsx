const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-6">
      <p>&copy; {new Date().getFullYear()} Alejandro Tañón Díaz. All rights reserved.</p>
    </footer>
  );
};

export default Footer;