import { style } from "~/utilities/style";

type TSectionWrapperProps = {
          Children: React.FC;
          id: string;
        };

        
const SectionWrapper = ({ Children,id }: TSectionWrapperProps) => 
          function HOC(){
                    return (
                              <section id={id} className={`mx-auto relative z-0  ${style.padding}`}>
                                        <Children/>
                              </section>
                    )
          }




export default SectionWrapper;