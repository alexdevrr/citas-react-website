const Title = ({ title }) => {
  return (
    <div className="text-center">
      <h1
        style={{
          fontFamily: 'Montserrat',
          // color: '#f25287',
          paddingBottom: '2rem',
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
