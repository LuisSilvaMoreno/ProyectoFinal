import { tailspin } from 'ldrs'

tailspin.register()

export const Loader = () => {
	return (
        <div className="container-loader">
            <l-tailspin
  size="40"
  stroke="5"
  speed="0.9" 
  color="black" />;
        </div>
    )
};

