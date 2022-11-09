import React from 'react';
// import Login from '../components/Login';
// import SignUp from '../components/SignUp';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { withRouter } from 'react-router-dom';
// import PIC from './Images/profile_pic.jpg';
import ARMY from './Images/army.jpg';
import '../screens/Home.css';



const Home = () => {

    return (

        <div className='Container-Home' >
            <Header />


            <div className='text'>
                <section>
                <h1>Jeremiah McDonald</h1>
                <h2>Data Analyst / Web Developer</h2>
                
                </section>
                <div className='ImageStyle'>
                    {/* <img src={PIC} alt="profile pic"></img> */}
                    <img src={ARMY} alt="ARMY PIC"></img>
                </div>


                <div className='nodisplay'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus arcu mollis tincidunt iaculis. Vestibulum commodo urna purus, vitae fermentum ligula blandit sed. Nullam odio dui, semper non hendrerit quis, dictum ac justo. Praesent nec tempus mi, in maximus sapien. Cras dapibus viverra justo, sed ullamcorper quam ultricies ac. Ut aliquet risus nec lectus porttitor, ut sagittis ex feugiat. Donec tempus sem eget ligula rutrum, sit amet feugiat arcu maximus. Pellentesque tempus fermentum ipsum, non ornare eros volutpat a. Fusce placerat nisl sed bibendum sollicitudin. Vivamus at commodo lacus, in blandit sem. Integer vestibulum erat ac aliquet imperdiet. Quisque eget ex ultricies orci dictum ornare ultricies sed nunc. Donec a lacinia erat. Aliquam erat volutpat. Fusce ac purus pellentesque, lacinia augue in, facilisis augue. Donec condimentum mauris in ipsum feugiat, vitae aliquet libero lobortis.

                    Donec consectetur tortor ut pulvinar fringilla. Donec convallis ipsum vestibulum, consequat justo non, mattis tortor. Nullam nisl libero, pulvinar et risus at, tincidunt fringilla nunc. Fusce lobortis, orci non euismod maximus, tellus tellus molestie lectus, a semper leo risus ac est. Duis fermentum suscipit mi id tempor. In ultrices feugiat diam a cursus. Morbi finibus massa vitae metus accumsan, at porttitor turpis cursus. Nullam euismod quam nisi, posuere ultricies magna ullamcorper vitae.

                    Cras sit amet pharetra nibh, a posuere metus. Curabitur vitae arcu porta, tincidunt erat eget, luctus ante. Nunc vitae suscipit lorem, non sodales dui. Cras sed accumsan dui, vel finibus sem. Duis tortor risus, blandit nec sem in, vulputate convallis ligula. Vestibulum id molestie leo, ut laoreet erat. Donec purus arcu, dapibus ac erat at, tristique ornare tortor. Vivamus pellentesque blandit nibh, non malesuada sem maximus nec. Duis ex felis, dictum sit amet porta non, tristique in risus. Ut dapibus ornare lacinia. Cras molestie, magna condimentum pulvinar aliquam, sem lacus volutpat arcu, ut tincidunt mi eros et magna. Duis non consequat risus. Nunc faucibus dolor ipsum, in ultricies ante scelerisque ut.

                    Nulla rhoncus sem enim, at finibus justo pellentesque at. Ut sed mattis metus. Curabitur lacinia sollicitudin sollicitudin. Ut laoreet convallis augue, sed hendrerit nunc luctus eget. Vestibulum bibendum tempor vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum lacus in neque commodo, a porta risus hendrerit. In finibus ultricies magna, vel commodo risus tincidunt eget. Sed varius tincidunt blandit. Nullam iaculis luctus tellus eu euismod. Nunc et elit in diam ornare iaculis. Sed fermentum laoreet leo, nec consectetur quam malesuada id. Nulla at nibh id leo dictum ullamcorper non quis massa.

                    Sed suscipit augue ac lacus porta semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam feugiat nunc et orci varius euismod. Phasellus accumsan justo ac lectus cursus, et fermentum mauris posuere. Aenean fringilla dictum lorem ac interdum. In tellus nisi, placerat eget consectetur eget, volutpat non elit. Etiam sollicitudin rhoncus dapibus. Aliquam dui orci, faucibus vitae libero in, elementum pretium neque. Pellentesque ultricies pulvinar ultrices. Maecenas sit amet nulla felis. Nam vulputate eros quis nibh maximus volutpat. Proin elit justo, congue nec ex quis, scelerisque rutrum velit. Vestibulum rhoncus felis ut justo lobortis, vitae pulvinar est mollis.

                    Duis ante ligula, hendrerit in justo eu, pretium tempor ex. Curabitur viverra, lacus non efficitur posuere, nisl sapien posuere purus, eget porttitor est nisi ut nisi. Vivamus ut consequat sapien. Duis maximus dolor non sollicitudin laoreet. Nunc luctus blandit purus eu vestibulum. Vestibulum a accumsan sapien, vitae pharetra nibh. In tincidunt ligula dignissim, feugiat elit vel, semper nunc. Proin ornare libero ut molestie rutrum. Etiam feugiat sodales risus ut porttitor. Nunc urna nibh, euismod ut sapien quis, rutrum fermentum neque. Nullam dictum massa quis eros interdum, eget pharetra elit rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur mollis nisi quis nisi pharetra dignissim. Etiam tristique dui neque.

                    Mauris convallis justo id posuere dignissim. Nam neque elit, varius ut tempus condimentum, faucibus et augue. Donec a suscipit mi. Mauris non blandit nisi. Suspendisse hendrerit dignissim erat, vel finibus sem bibendum eu. Sed condimentum, nibh sed dictum suscipit, nisl nulla eleifend ex, in porta leo mauris at est. Mauris id arcu semper, ullamcorper ipsum eu, vestibulum eros.

                    Nullam commodo aliquet magna ut aliquam. Nulla egestas turpis quis rhoncus porta. Suspendisse elit risus, rutrum in massa sit amet, luctus semper turpis. Donec quis leo luctus, feugiat libero quis, posuere lacus. Fusce ornare rutrum velit. Duis sit amet nunc eget sem euismod dapibus a at sapien. Aliquam faucibus imperdiet neque non eleifend. Sed vel viverra enim. In tristique erat sit amet est dapibus, eget bibendum dolor condimentum. Sed eu tortor lobortis, sagittis ante in, fermentum eros. Curabitur iaculis commodo ipsum, non vehicula dui aliquam non. Nulla non scelerisque nibh. Proin imperdiet ex at erat pellentesque, elementum dictum lectus varius.

                    Integer molestie libero ut sem mollis condimentum. Nulla blandit tellus in consectetur iaculis. Quisque volutpat sapien eget urna rutrum porta. Nulla convallis lectus vitae placerat luctus. Donec vitae velit mi. Aenean ut dapibus neque. Sed scelerisque tortor nec diam hendrerit facilisis. Mauris at lorem vel ipsum ultricies congue nec non diam. Etiam posuere ipsum libero, condimentum varius leo tincidunt eget. Donec euismod urna vitae nunc commodo, et gravida augue interdum.

                    Phasellus sed molestie ante, sed dapibus metus. Nunc libero libero, mattis eget dui sit amet, laoreet blandit eros. Mauris laoreet bibendum nisi a dignissim. Proin tempor posuere diam, quis consequat justo. Quisque facilisis odio lacus, sit amet hendrerit justo aliquam vel. Etiam finibus sollicitudin nunc sed condimentum. Nunc eros velit, vehicula id turpis ornare, congue lacinia eros. Maecenas sit amet elementum magna, sed semper mauris. Mauris auctor mauris sit amet mi consectetur tincidunt. Donec scelerisque consequat augue, vel volutpat elit varius a. Morbi sagittis tristique sem, et sagittis orci elementum non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam pulvinar aliquet velit, sed posuere justo imperdiet non. Donec efficitur commodo turpis, in euismod quam efficitur ut. Aenean luctus risus eget mi auctor, vel suscipit enim dapibus.

                    Duis dapibus efficitur turpis et aliquet. Praesent vestibulum auctor neque, vitae pharetra nunc feugiat at. Etiam lacinia tristique interdum. Aenean laoreet gravida lorem, quis porta orci mattis ut. Praesent sed justo felis. Duis vitae feugiat arcu, at eleifend enim. Ut placerat, tellus ac commodo tristique, metus ligula sodales diam, nec dapibus risus felis id magna. Donec nulla mi, lobortis non varius nec, commodo nec lorem. Nulla nulla dolor, dapibus at scelerisque ut, auctor ac massa. Donec tristique et est et tempus. Morbi at nunc mattis urna auctor sodales aliquet ut est. Proin tincidunt est tellus, quis lobortis neque laoreet sit amet. Nam nulla nibh, consequat nec urna cursus, condimentum lobortis ipsum. Phasellus ultrices, velit sed laoreet placerat, sapien erat gravida lorem, vel hendrerit quam odio in est. Etiam scelerisque sapien in euismod ullamcorper.

                    Aliquam iaculis massa id dolor faucibus, eu sollicitudin ante aliquam. Vestibulum pretium mattis risus. Quisque vitae nibh tortor. Integer quis felis ac justo sollicitudin iaculis. Nullam vulputate bibendum elit. Curabitur a ligula at enim convallis pharetra. Morbi eu nisi sagittis lorem efficitur tincidunt eget in eros. Aliquam elementum, libero et imperdiet molestie, neque dui maximus mi, sed luctus tellus elit eu leo. Pellentesque porta nunc sit amet justo commodo sagittis. Nulla quis ultricies massa.

                    Nunc molestie vehicula tempor. Nullam eleifend neque eu maximus vehicula. Quisque elementum efficitur augue et sagittis. Praesent porta condimentum lorem pretium volutpat. Suspendisse eget mi nec orci hendrerit lobortis. Pellentesque sed justo libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis ornare risus. Nam in consequat nulla, ut dignissim sapien. Sed vestibulum lectus metus, ac dignissim enim rutrum ut. Nulla sed maximus mi. Vestibulum vel eros ut mi tincidunt interdum ac quis nulla.

                    Phasellus facilisis nisi non laoreet placerat. Etiam vestibulum est at dui semper placerat. Morbi ut blandit purus, ut tincidunt tortor. Suspendisse molestie fermentum interdum. Maecenas porta eget justo ut pharetra. Mauris massa tortor, malesuada nec est at, rutrum aliquam nisl. Quisque vestibulum purus in viverra posuere.

                    Aliquam eget magna vitae leo laoreet convallis in sodales justo. Nulla vestibulum est ut tellus congue, non eleifend urna interdum. Aenean at imperdiet enim. Nunc facilisis congue odio, sed rhoncus arcu faucibus quis. Fusce eget diam congue, malesuada purus laoreet, vestibulum lacus. Morbi eros sapien, sagittis eget est in, accumsan elementum orci. Ut interdum nunc quis risus suscipit, at maximus nisi scelerisque. Vivamus ac sodales ligula. Cras dignissim aliquam ipsum et placerat. Nunc magna purus, feugiat quis risus et, gravida consectetur dolor. Maecenas ut ornare arcu.

                    Integer bibendum, ante ac ullamcorper consequat, nulla justo ullamcorper nisi, vel rhoncus massa mi non nisi. Cras sed scelerisque nulla. Sed ultricies odio ac libero scelerisque blandit nec in purus. In egestas leo sit amet augue faucibus, nec convallis ipsum porttitor. Phasellus pulvinar mauris eget arcu posuere, ut venenatis elit sagittis. Praesent vitae laoreet neque, ut fermentum dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ipsum sem, cursus eu malesuada sed, suscipit eget velit.

                    Sed blandit tortor tortor, quis dignissim velit varius vel. In id ullamcorper enim. Sed finibus mauris eget mi faucibus, non feugiat elit venenatis. Morbi ultricies libero nec magna venenatis, sed placerat tortor faucibus. In auctor ullamcorper convallis. Integer feugiat ex mauris, nec molestie sem tempus ut. Ut hendrerit placerat blandit. Donec eleifend lacinia metus nec commodo. Phasellus pellentesque ac elit sit amet maximus. Ut suscipit, neque a gravida ultricies, est tellus imperdiet magna, imperdiet tempor purus mi ac ex. Curabitur elit nisi, laoreet sit amet feugiat vitae, accumsan vitae odio.

                    Quisque iaculis vitae magna et imperdiet. Praesent auctor dictum arcu a placerat. Integer consectetur tortor commodo, tincidunt diam eu, efficitur lacus. Phasellus gravida sollicitudin nibh et sagittis. Mauris volutpat metus vitae arcu gravida, sit amet aliquam sapien pretium. Etiam quis pulvinar dui. Pellentesque egestas enim vitae malesuada iaculis. Nulla placerat diam neque, eu vestibulum eros tempor sit amet. Quisque quis eros orci. Vestibulum elit felis, pellentesque vitae nulla ac, porta ullamcorper elit. Morbi ac pellentesque est. Etiam sit amet nisl vitae ipsum condimentum tincidunt. Donec sed odio in nisl vulputate volutpat vel ac turpis.

                    Suspendisse sit amet facilisis tortor. Proin molestie sapien eu ipsum eleifend, id tristique eros egestas. Nulla malesuada eleifend nulla ac consectetur. Vivamus scelerisque id orci sed pharetra. Proin ut rutrum erat. Praesent sit amet diam vitae nibh ultricies scelerisque. Nunc iaculis diam vitae auctor commodo. Nullam id sodales ante, quis consequat quam. Etiam non velit condimentum lorem condimentum bibendum at id massa. Donec sollicitudin molestie lorem volutpat aliquam.

                    Aenean eget vulputate lorem, vitae porttitor massa. Sed facilisis nisl at eros egestas sodales. Donec magna odio, porttitor non mi rutrum, bibendum faucibus turpis. In vel orci sed arcu convallis ullamcorper sed non felis. Sed hendrerit, arcu nec viverra iaculis, nisl velit fringilla ipsum, vel accumsan justo odio nec dolor. Integer fringilla mi in mollis malesuada. Nunc rutrum, magna ac commodo sagittis, erat lectus eleifend lectus, nec tempor urna diam quis justo.

                    Mauris lacinia non nulla a pretium. Suspendisse aliquet sagittis rhoncus. Pellentesque cursus lacus ut lacus sagittis ultrices. Vestibulum at leo felis. Aliquam ut elit in massa dictum aliquet. Mauris in mollis neque. Proin mollis id diam sit amet posuere. Sed vel neque egestas lacus bibendum viverra. Mauris quis elit in magna aliquam tincidunt. Fusce scelerisque erat urna, et egestas leo tristique ut.

                    Aenean in ornare mauris, sit amet mollis lacus. Nam pellentesque mauris ut auctor aliquam. Nam venenatis a nibh et posuere. In ultrices massa vitae augue eleifend, cursus gravida nulla semper. Vestibulum risus risus, venenatis nec imperdiet eget, rutrum non nisi. Phasellus congue vulputate gravida. Nam lacinia luctus facilisis. Vestibulum rhoncus venenatis laoreet. Nunc vitae enim metus. Mauris posuere turpis mi, id eleifend velit condimentum vel. Duis sit amet tempus odio. Vivamus ac sem sed lacus ultricies consectetur.

                    Pellentesque pellentesque libero in gravida condimentum. Ut non lorem pulvinar, lobortis ipsum ut, cursus diam. Nunc in bibendum mi. Integer nisl ex, rhoncus a tortor eu, mattis ultrices lacus. In eleifend ligula quis lorem pellentesque, laoreet tempor dui bibendum. Pellentesque hendrerit volutpat elit nec luctus. Ut non commodo diam, ornare tempus est. Praesent eget ante at metus sodales consequat. Sed volutpat porttitor neque tristique auctor. Sed velit dolor, tincidunt non convallis et, mattis a ex. Curabitur ultricies euismod dui, id tincidunt enim condimentum et. Cras in cursus mauris. Maecenas efficitur dui sed urna vulputate, vitae faucibus nunc mattis. Donec eget felis a magna scelerisque feugiat. Donec elementum mi vel sollicitudin tincidunt. Nunc est leo, fermentum vitae blandit in, euismod et lorem.

                    Suspendisse tincidunt orci eu velit molestie sollicitudin. Sed posuere odio id ex laoreet, non lobortis enim vehicula. Ut vel pretium ligula. Proin tempor ante vestibulum enim maximus, a commodo nisi varius. Donec nec scelerisque est. Aenean eros orci, faucibus sit amet tortor ultricies, sollicitudin tincidunt sem. Vivamus vel neque sapien. Maecenas id ex fringilla, porttitor sem ut, faucibus mi. Quisque porttitor libero libero, non auctor neque eleifend et. Sed semper mi non vulputate tincidunt. Vivamus scelerisque feugiat posuere. Cras eget lobortis sem. Ut non augue interdum, ultricies arcu id, dignissim elit. Vestibulum efficitur dui nisi, sed volutpat risus porta eu. Etiam iaculis nisl eleifend sapien imperdiet, vel auctor elit auctor. Sed egestas augue quis purus sodales, et viverra orci imperdiet.

                    Proin vitae rutrum purus. Nunc eget mauris facilisis, consequat neque sed, efficitur orci. Integer aliquam quam sed consectetur auctor. Pellentesque laoreet ante nunc, eget placerat mi rhoncus vel. Suspendisse potenti. In id vehicula erat. Morbi sollicitudin, purus et porttitor sagittis, neque nibh elementum lorem, id interdum dolor eros ut nulla. Suspendisse at rhoncus leo. Cras aliquam efficitur est, eu consequat risus egestas in.
                </div>
            </div>

            <Footer />
        </div>



    );

};

export default withRouter(Home);






