import React from 'react'
import Navbar from '../components/Navbar/Navbar'

function HowItWorks() {
  const gradientStyle = {
    backgroundColor: 'linear-gradient(to top, #FFFBF4 50%, #BFDBF7 50%)',
  };

  return (
    <div className='w-screen h-screen' style={{backgroundColor: gradientStyle.backgroundColor}}>
      <Navbar />
      <div className='h-max bg-[#FFFBF4]'>
        <div className='flex items-center justify-around pt-3'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="190" height="140" viewBox="0 0 813 423.80418" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M951.08008,652.12182a45.62764,45.62764,0,0,1-3.8999,7.78027c-.43018.68018-.88038,1.3501-1.36036,2H905.98c-.27978-.21-.5498-.43018-.83008-.64014-1.3999-.10986-2.79-.25-4.1499-.3999.14014-.12012.29-.24023.43018-.35986-.72022.06006-1.43995.11963-2.16016.1499.56982.06982,1.1499.14014,1.73.21-.43018.3501-.87012.7002-1.31982,1.04h-1.74024l1.16992-1.25c-.92968.02979-1.85009.04981-2.77978.02979l2.91015-.77979,3.13965-.83984c.12012.09961.25.1997.37012.2998a53.22011,53.22011,0,0,0,3.68018-76.39014,71.33813,71.33813,0,0,1,30.35009,46.01026,41.55661,41.55661,0,0,1,.39991,13.7998c.35009-.38964.6997-.77978,1.03955-1.17968A54.16,54.16,0,0,0,949.66016,597.012,71.38083,71.38083,0,0,1,951.08008,652.12182Z" transform="translate(-193.5 -238.09791)" fill="#e6e6e6" /><circle cx="558.84183" cy="51.48317" r="28.08173" fill="#2f2e41" /><polygon points="649.907 412.099 637.647 412.098 631.814 364.81 649.909 364.811 649.907 412.099" fill="#ffb8b8" /><path d="M628.88964,408.59511h23.64387a0,0,0,0,1,0,0V423.482a0,0,0,0,1,0,0H614.00278a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,628.88964,408.59511Z" fill="#2f2e41" /><polygon points="524.845 410.494 513.008 407.302 519.685 360.126 537.155 364.837 524.845 410.494" fill="#ffb8b8" /><path d="M696.876,640.62164H720.5199a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H681.98917a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,696.876,640.62164Z" transform="translate(-0.611 -398.30924) rotate(15.08956)" fill="#2f2e41" /><path d="M741.57717,431.39381,705.07092,638.26255l18.72115,3.74423,58.97164-146.025,43.9947,145.08894,22.46539-2.80818s-10.29664-207.80479-43.05865-225.58989Z" transform="translate(-193.5 -238.09791)" fill="#2f2e41" /><path d="M683.68176,505.3971a10.05581,10.05581,0,0,0,3.59591-14.99417l20.13339-29.5233-18.56746-.28816-16.27242,28.08a10.11027,10.11027,0,0,0,11.11058,16.72562Z" transform="translate(-193.5 -238.09791)" fill="#ffb8b8" /><path d="M816.60194,468.89086a10.05578,10.05578,0,0,0,3.59592-14.99417l20.13339-29.52331-18.56746-.28816-16.27242,28.08a10.11027,10.11027,0,0,0,11.11057,16.72563Z" transform="translate(-193.5 -238.09791)" fill="#ffb8b8" /><circle cx="559.55677" cy="60.56367" r="24.56103" fill="#ffb8b8" /><path d="M806.16515,336.852c-.93606-3.74423-16.849-2.80817-16.849-2.80817s-17.91856-4.11948-17.749-3.60437c-15.09987-1.1623-33.51936,4.5066-36.20207,5.36633-5.4886,1.51424-15.97532,6.14623-23.538,9.55316a4.38074,4.38074,0,0,0-2.21091,5.75542l23.06847,52.66575,3.2762,34.16611,75.82067-23.40144C793.06034,407.05631,807.1012,340.59622,806.16515,336.852Z" transform="translate(-193.5 -238.09791)" fill="#5da1e4" /><polygon points="606.113 99.69 612.336 98.127 646.363 165.214 648.235 203.593 626.706 186.744 626.706 171.767 604.241 142.749 606.113 99.69" fill="#5da1e4" /><path d="M717.7077,342.93637l-7.20562,3.20249a2.50317,2.50317,0,0,0-1.449,1.85561L694.77429,429.5217l-14.04087,41.18654,18.72115,9.36057,21.52933-51.48317,7.48846-37.44231Z" transform="translate(-193.5 -238.09791)" fill="#5da1e4" /><path d="M727.29984,287.08328c4.985-1.63684,10.2436.92924,15.11328,2.88268,4.79927,1.9252,9.92693,3.31258,15.089,3.0093s10.38267-2.48332,13.50355-6.60636,3.67009-10.30225.58085-14.449c-2.03364-2.72985-5.27861-4.2874-8.52808-5.30162-6.94293-2.167-14.71345-2.24184-21.313.81534s-11.7747,9.51567-12.31843,16.76856" transform="translate(-193.5 -238.09791)" fill="#2f2e41" /><path d="M751.59383,267.51935c-1.67441-11.33607,4.53512-23.106,13.01014-27.32821s18.41768-1.73148,26.05251,4.55592,13.2005,15.94924,17.34295,26.21986,7.01073,21.27122,10.38593,31.98265c2.99761,9.5131,6.51648,19.03195,12.20956,26.30764s13.97217,12.0102,21.90508,10.01114c-6.51732,8.7627-18.507,7.24543-25.94521-.24973s-11.305-19.21018-14.34878-30.61366-5.69221-23.33512-11.5804-32.785c-10.47519-16.81146-31.03124-21.86216-45.71131-11.23144" transform="translate(-193.5 -238.09791)" fill="#2f2e41" /><rect y="421.80418" width="813" height="2" fill="#3f3d56" /><path d="M620.04,468.00979H265.21616A10.72787,10.72787,0,0,1,254.5,457.29363V372.75506a10.72787,10.72787,0,0,1,10.71616-10.71615H620.04a10.72787,10.72787,0,0,1,10.71616,10.71615v84.53857A10.72787,10.72787,0,0,1,620.04,468.00979ZM265.21616,364.42027a8.3449,8.3449,0,0,0-8.33479,8.33479v84.53857a8.3449,8.3449,0,0,0,8.33479,8.33479H620.04a8.3449,8.3449,0,0,0,8.33479-8.33479V372.75506a8.3449,8.3449,0,0,0-8.33479-8.33479Z" transform="translate(-193.5 -238.09791)" fill="#3f3d56" /><path d="M602.77509,450.14953h-320.294a1.19069,1.19069,0,1,1,0-2.38137h320.294a1.19069,1.19069,0,1,1,0,2.38137Z" transform="translate(-193.5 -238.09791)" fill="#e6e6e6" /><path d="M316.41557,410.857h-26.195a1.19069,1.19069,0,0,0,0,2.38137h11.90684v21.05441a5.99643,5.99643,0,0,0,5.543,6.06156c.07442.00349.15116.00465.22907.00465a5.76158,5.76158,0,0,0,4.70576-2.593,1.19022,1.19022,0,0,0-1.90463-1.42789,3.379,3.379,0,0,1-2.9302,1.63719,3.59514,3.59514,0,0,1-3.26159-3.68252V413.23832h11.90684a1.19069,1.19069,0,1,0,0-2.38137Z" transform="translate(-193.5 -238.09791)" fill="#5da1e4" /><circle cx="212.21688" cy="266.82308" r="9.52547" fill="#e6e6e6" /><circle cx="249.12808" cy="266.82308" r="9.52547" fill="#5da1e4" /><circle cx="286.03929" cy="266.82308" r="9.52547" fill="#e6e6e6" /><path d="M321.97522,439.4708a1.5009,1.5009,0,0,0,0-3,1.5009,1.5009,0,0,0,0,3Z" transform="translate(-193.5 -238.09791)" fill="#3f3d56" /><path d="M331.5007,439.4708a1.5009,1.5009,0,0,0,0-3,1.5009,1.5009,0,0,0,0,3Z" transform="translate(-193.5 -238.09791)" fill="#3f3d56" /><path d="M341.02617,439.4708a1.5009,1.5009,0,0,0,0-3,1.5009,1.5009,0,0,0,0,3Z" transform="translate(-193.5 -238.09791)" fill="#3f3d56" /></svg>
          </div>
          <div className='w-2/6'>
            <p className="font-semibold text-[#5DA1E4] text-xl">Fill out our quick form and get a prompt callback to discuss your needs.</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='w-3/5 h-[20px] border-[#BFDBF7] border-dashed ml-auto mr-auto' style={{ borderLeft: '3px dashed #BFDBF7' }}></div>
          <div className='w-3/5 border-[2px] border-[#BFDBF7] border-dashed ml-auto mr-auto' style={{ borderBottom: '3px' }}></div>
          <div className='w-3/5 h-[20px] border-[#BFDBF7] border-dashed ml-auto mr-auto' style={{ borderRight: '3px dashed #BFDBF7' }}></div>
        </div>
        <div className='flex items-center justify-around pt-3'>
          <div className='w-2/6'>
            <p className="font-semibold text-[#5DA1E4] text-xl">Benefit from the convenience of free vehicle pickup right from your doorstep.</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="190" height="140" viewBox="0 0 648 648" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M648,324c0,21.63-2.12012,42.76996-6.16992,63.20996-1.26001,6.41003-2.72021,12.75-4.36011,19.02002-3.23999,12.41998-7.20996,24.53998-11.84985,36.33002-.63013,1.62-1.28003,3.22998-1.9502,4.83997-1.6499,4.01001-3.37988,7.98004-5.18994,11.90002-.95996,2.09998-1.94995,4.19-2.96997,6.27002-3.81006,7.84998-7.93994,15.52997-12.36987,23.00995-5.03027,8.52002-10.44019,16.80005-16.22021,24.79004-10.33984,14.33997-21.82983,27.79999-34.32983,40.22998-58.59009,58.35004-139.38013,94.40002-228.59009,94.40002-89.62,0-170.75-36.39001-229.40002-95.20001-12.08997-12.12-23.22998-25.19-33.27991-39.09998-11.59009-16.01001-21.75-33.13-30.29004-51.17004-1.41003-2.95996-2.77002-5.95001-4.08008-8.95996-.16992-.37-.31995-.73004-.47998-1.10004-2.01001-4.63-3.8999-9.32001-5.68994-14.06-1.6001-4.23999-3.12012-8.52997-4.54004-12.85999-2.09998-6.35999-4.01001-12.79999-5.70996-19.33002-1.38-5.26001-2.63-10.57996-3.73999-15.94C2.75,370.87,.44995,350.82996,.07007,330.32001c-.05005-2.10004-.07007-4.21002-.07007-6.32001,0-9.47003,.40991-18.84003,1.19995-28.10004,.28003-3.21997,.6001-6.42999,.96997-9.62,4.09009-35.27997,13.8501-68.82996,28.34009-99.71997,3.72998-7.95001,7.77002-15.72003,12.10999-23.29999,16.05994-28.05005,36.19006-53.47003,59.58997-75.44,3.27002-3.08002,6.6001-6.08002,10-9.01001C169,29.70001,243.03003,0,324,0c178.93994,0,324,145.06,324,324Z" fill="#f2f2f2" /><rect x="477.38951" y="233.04743" width="12.11047" height="85.98428" fill="#3f3d56" /><path d="M489.53003,231.95996l-.43994,1.09003-4.12012,10.13-7.57996-3.08002-10.90002-4.41998c-67.65076-21.71457-153.15125-32.82602-185.71997-75.38l-2.12-.85999c-13.62872,11.30832-23.09283,11.96948-23.82996-9.67999l-2.12012-.86005c-55.58493,11.42871-103.65475-21.20618-150.48999-61.07996,3.27002-3.08002,6.6001-6.08002,10-9.01001,65.84491,1.84599,121.995,13.27042,143.98999,58.44l2.13013,.86999,25.58984,10.38,2.14014,.87c56.84302-11.98691,120.70392,31.22052,184.62988,74.94l18.84009,7.64996Z" fill="#3f3d56" /><path d="M586.91992,513.37c-10.33984,14.33997-21.82983,27.79999-34.32983,40.22998-144.05005,2.81-317.64014,2.46002-457.99011-.79999-12.08997-12.12-23.22998-25.19-33.27991-39.09998,29.1499-.81,60.10986-1.45001,92.21997-1.95001,12.70996-.21002,25.60999-.38,38.6499-.54004,12.95007-.13995,26.04004-.26996,39.22998-.38h.01001c119.8501-.96997,248.05005-.07996,355.48999,2.54004Z" fill="#d0cde1" /><path d="M637.46997,406.22998c-3.23999,12.41998-7.20996,24.53998-11.84985,36.33002-.63013,1.62-1.28003,3.22998-1.9502,4.83997h-15.48999v-41.16998h29.29004Z" fill="#3f3d56" /><path d="M625.62012,442.56c-.63013,1.62-1.28003,3.22998-1.9502,4.83997-1.6499,4.01001-3.37988,7.98004-5.18994,11.90002-.95996,2.09998-1.94995,4.19-2.96997,6.27002-3.81006,7.84998-7.93994,15.52997-12.36987,23.00995-154.7796,18.03448-298.02216,22.35608-418.82007,0v-46.01996h441.30005Z" fill="#3f3d56" /><path d="M618.47998,387.83997v71.46002c-.95996,2.09998-1.94995,4.19-2.96997,6.27002-43.96039-21.4632-84.14825-18.90271-121.77002,0v-156.83002c30.45642-18.20798,61.43658-21.20496,93.25,0l29.22998,73.40997,2.26001,5.69Z" fill="#d0cde1" /><path d="M513.11542,318.42618h53.28599l.00002,53.28604c-17.56921,9.38489-35.33527,9.18454-53.28601,0-9.25635-17.76202-9.25635-35.52402,0-53.28604Z" fill="#fff" /><path d="M606.3656,372.31802c-7.0033,7.88394-19.84515,5.06235-33.909,0l-.00002-53.28597h14.53296l19.37605,53.28597Z" fill="#fff" /><rect x="515.53746" y="401.98838" width="12.11047" height="23.00989" fill="#3f3d56" /><path d="M582.75053,352.94105h.60553c6.354,0,11.50494,5.15091,11.50494,11.50491v.00003h0c0,6.354-5.15094,11.50494-11.50494,11.50494h-.60553v-23.00989h0Z" fill="#3f3d56" /><path d="M132.24132,442.55845h.60553c6.354,0,11.50494,5.15091,11.50494,11.50491v.00003h0c0,6.354-5.15091,11.50494-11.50491,11.50494h-.60556v-23.00989h0Z" fill="#3f3d56" /><path d="M641.83008,387.20996c-1.26001,6.41003-2.72021,12.75-4.36011,19.02002-3.23999,12.41998-7.20996,24.53998-11.84985,36.33002-.63013,1.62-1.28003,3.22998-1.9502,4.83997-1.6499,4.01001-3.37988,7.98004-5.18994,11.90002-.95996,2.09998-1.94995,4.19-2.96997,6.27002h-5.51001l-.6499-18.17004-.17017-4.83997-1-28.19-1.20996-34.04004,9.25,1.82001,25.61011,5.06Z" fill="#d0cde1" /><circle cx="192.18812" cy="486.76164" r="46.01974" fill="#3f3d56" /><circle cx="192.18812" cy="486.76164" r="24.22092" fill="#d0cde1" /><path d="M497.37183,437.1087h-.00006v-150.16974h-25.43195c-5.04586,9.51031-7.60763,23.97249-8.51999,41.72262-3.11813,60.66385-52.78591,108.44712-113.52984,108.44712H131.6358v10.89941H469.77631c.7168,7.45941,1.44592,14.94348,2.16351,22.40442l25.43195-.00006v-22.40436h.00006v-10.89941Z" fill="#3f3d56" /><path d="M300.71417,386.83661l6.8311-5.02004,41.95916,57.09675-6.83109,5.02002c-31.51196-3.88904-45.3515-23.04822-41.95917-57.09674Z" fill="#3f3d56" /><path d="M370.63379,193.78165l7.74572,3.44502-83.79469,246.74161-7.74571-3.44502c10.38477-67.61377,42.2923-191.32068,83.79468-246.74161Z" fill="#3f3d56" /><rect x="577.90636" y="374.73985" width="12.11047" height="4.84418" fill="#3f3d56" /><path d="M481.24679,303.62517c.00602-.09038,.01027-.17091-.0052-.25491-.07238-.67333-.66848-1.14579-1.33197-1.07158l-7.80697,.87757-274.19074,9.91254-2.42507,.2667c-.52846,.05771-.95569,.45872-1.05087,.99024-.1181,.65949,.31817,1.28625,.97772,1.40436l279.97237,34.89832c.66825,.06882,1.25457-.42553,1.32352-1.09382l4.53721-45.92942Zm-277.20699,11.21113l267.61865-9.17949,7.02817-.78339-4.26192,43.1443-270.3849-33.18142Z" fill="#3f3d56" /><path d="M283.91992,148.5l-5.2699,10.94-71.42004,148.06,47.59009-157.73999,3.51001-11.64001-2.13013-.87-3.5,11.64996-49.09998,163.84003-.5199,2.38c-.12012,.52002,.11987,1.04999,.59985,1.31,.58008,.33002,1.32007,.12,1.64014-.47003l75.44995-155.65997,5.29004-10.92999-2.14014-.87Z" fill="#3f3d56" /><path d="M50.78003,316.13l-3.51001-33.13-.95996-9.13-4.96008-46.88-3.00989-28.48999c-.06006-.60999-.58008-1.08002-1.20007-1.08002s-1.14001,.46002-1.21008,1.07001l-3.27002,28.5-6,52.40002-1.10986,9.68994-3.20996,28-4.47009,39.03003c-.01001,.03998-.01001,.08002-.01001,.13-.01001,.65997,.53003,1.21002,1.20007,1.21997l14.55994,.14001,20.21008,.19h.01001c.03992,0,.07983-.01001,.11987-.01001,.67004-.07001,1.15002-.66998,1.08008-1.32996l-4.26001-40.32001Zm-11.97998,39.08997l-5.79004-.04999-12.58008-.12,3.64014-31.78003v-.00995l4-34.88,1.10986-9.70001,5.93005-51.69,1.9801-17.29999,1.82983,17.29999,5.03003,47.53998,.95996,9.13,3.5,33.13,4.08008,38.56-13.68994-.13Z" fill="#3f3d56" /><path d="M230.04004,363.96997l-6.52002,3.56-18.63,5.21002-15.62,4.38-33.92004,9.48999-15.62,4.37c-48.54849-7.96399-73.06326,8.79968-96.23999,26.94l-15.62,4.36999-11.63,3.26001c-2.09998-6.35999-4.01001-12.79999-5.70996-19.33002-1.38-5.26001-2.63-10.57996-3.73999-15.94C2.75,370.87,.44995,350.82996,.07007,330.32001c-.05005-2.10004-.07007-4.21002-.07007-6.32001,0-9.47003,.40991-18.84003,1.19995-28.10004,.28003-3.21997,.6001-6.42999,.96997-9.62l24.48999-6.88995,2.52002-.71002,14.77002-4.15002,2.36011-.65997,37.48999-10.54999c28.82269-2.03586,50.77924,10.48157,69.47998,29.89996,0,0,26.62-7.95001,46.20996,6.08002,6.19995,4.45001,11.68994,11.09998,15.41003,20.90997l3.20996,9.25,11.93005,34.51001Z" fill="#5da1e4" /><circle cx="171.48628" cy="378.91004" r="33.96661" fill="#3f3d56" /><circle cx="171.48628" cy="378.91004" r="17.87717" fill="#d0cde1" /><path d="M44.05005,424.08997c0,11.23999-5.45996,21.20001-13.88013,27.38-1.02991,.76001-2.10986,1.46002-3.21997,2.10004-.16992-.37-.31995-.73004-.47998-1.10004-2.01001-4.63-3.8999-9.32001-5.68994-14.06-1.6001-4.23999-3.12012-8.52997-4.54004-12.85999-2.09998-6.35999-4.01001-12.79999-5.70996-19.33002-1.38-5.26001-2.63-10.57996-3.73999-15.94,1.07996-.10999,2.17993-.15997,3.29004-.15997,16.6499,0,30.51001,11.97998,33.40991,27.79999,.37,2,.56006,4.06,.56006,6.16998Z" fill="#3f3d56" /><path d="M27.95996,424.08997c0,5.86005-2.81995,11.06-7.17993,14.32001-1.6001-4.23999-3.12012-8.52997-4.54004-12.85999-2.09998-6.35999-4.01001-12.79999-5.70996-19.33002,9.06995,.22003,16.44995,7.17999,17.33997,16.07001,.05994,.59003,.08997,1.19,.08997,1.79999Z" fill="#d0cde1" /><path d="M129.26256,294.16404l-105.10001,29.418-8.85499-31.637c13.23325-10.33505,39.27002-14.93408,67.02798-18.76199l46.92702,20.981Z" fill="#fff" /><path d="M11.29004,327.17999L.07007,330.32001c-.05005-2.10004-.07007-4.21002-.07007-6.32001,0-9.47003,.40991-18.84003,1.19995-28.10004l1.23999-.34997c10.96094,7.19205,13.73178,17.81033,8.8501,31.63Z" fill="#fff" /><rect x="32.08977" y="346.22915" width="5.5683" height="10.57977" transform="translate(-93.45884 22.41035) rotate(-15.63709)" fill="#3f3d56" /><path d="M218.10538,329.46163c-9.22327,3.69147-19.69272-.79294-23.38419-10.0162-2.82056-7.04724-.91376-15.1066,4.76566-20.14279,6.19992,4.44595,11.698,11.09473,15.41599,20.90744l3.20255,9.25156Z" fill="#3f3d56" /><path d="M30.51001,186.56c3.72998-7.95001,7.77002-15.72003,12.10999-23.29999v63.72998h-12.10999v-40.42999Z" fill="#3f3d56" /><circle cx="483.44475" cy="235.46952" r="16.95465" fill="#3f3d56" /></svg>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='w-3/5 h-[20px] border-[#BFDBF7] border-dashed ml-auto mr-auto' style={{ borderRight: '3px dashed #BFDBF7' }}></div>
          <div className='w-3/5 border-[2px] border-[#BFDBF7] border-dashed ml-auto mr-auto' style={{ borderBottom: '3px' }}></div>
          <div className='w-3/5 h-[20px] border-[#BFDBF7] border-dashed ml-auto mr-auto' style={{ borderLeft: '3px dashed #BFDBF7' }}></div>
        </div>
        <div className='flex items-center justify-around pt-3'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="190" height="140" viewBox="0 0 856.12205 674" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M593.26357,266.136h-3.54069V169.13919A56.13918,56.13918,0,0,0,533.58377,113H328.0828a56.13913,56.13913,0,0,0-56.13933,56.13893v532.1324a56.13909,56.13909,0,0,0,56.13905,56.13917h205.501a56.13914,56.13914,0,0,0,56.13933-56.13895V335.18h3.54069Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><path d="M535.426,128.93322H508.60134A19.918,19.918,0,0,1,490.16,156.37379H372.4311a19.91806,19.91806,0,0,1-18.44139-27.44057H328.93542a41.92409,41.92409,0,0,0-41.92413,41.924V702.20874a41.92407,41.92407,0,0,0,41.92408,41.92408H535.426a41.92411,41.92411,0,0,0,41.92414-41.924V170.8573a41.92407,41.92407,0,0,0-41.92408-41.92408Zm-4.50666,246.49737a10.8911,10.8911,0,0,1-10.8592,10.8592H467.574a10.89109,10.89109,0,0,1-10.8592-10.8592v-2.7148a10.89111,10.89111,0,0,1,10.8592-10.8592h52.48612a10.89115,10.89115,0,0,1,10.8592,10.8592Zm5.88207-47.96146a10.89111,10.89111,0,0,1-10.8592,10.8592H337.7161a10.89109,10.89109,0,0,1-10.8592-10.8592v-2.7148a10.89112,10.89112,0,0,1,10.8592-10.8592H525.94221a10.89116,10.89116,0,0,1,10.8592,10.8592Zm0-47.96146a10.89111,10.89111,0,0,1-10.8592,10.8592H337.7161a10.89109,10.89109,0,0,1-10.8592-10.8592v-2.7148a10.89112,10.89112,0,0,1,10.8592-10.8592H525.94221a10.89116,10.89116,0,0,1,10.8592,10.8592Zm0-47.96146a10.8911,10.8911,0,0,1-10.8592,10.8592H337.7161a10.89109,10.89109,0,0,1-10.8592-10.8592v-2.7148a10.89111,10.89111,0,0,1,10.8592-10.8592H525.94221a10.89116,10.89116,0,0,1,10.8592,10.8592Z" transform="translate(-171.93898 -113)" fill="#fff" /><circle cx="169.84933" cy="213.56423" r="6.33453" fill="#fff" /><circle cx="190.66279" cy="213.56423" r="6.33453" fill="#fff" /><circle cx="211.47625" cy="213.56423" r="6.33453" fill="#fff" /><circle cx="232.28972" cy="213.56423" r="6.33453" fill="#fff" /><circle cx="300.15971" cy="261.52569" r="6.33453" fill="#fff" /><circle cx="320.97317" cy="261.52569" r="6.33453" fill="#fff" /><circle cx="341.78664" cy="261.52569" r="6.33453" fill="#fff" /><path d="M538.25762,456.6012H323.5908a19.01566,19.01566,0,0,0-19.01568,19.01563v104.59a19.01571,19.01571,0,0,0,19.01566,19.01571H538.25762a19.0157,19.0157,0,0,0,19.0157-19.01565V475.61688a19.01566,19.01566,0,0,0-19.0156-19.01568Zm-219.978,12.97163c.42392-.07665,10.47581-1.78725,18.79934,3.22117,8.323,5.00748,11.52088,14.6906,11.65264,15.1l.33649,1.04412-1.0801.19161a28.669,28.669,0,0,1-4.65836.34214,27.73763,27.73763,0,0,1-14.14144-3.56421c-8.323-5.00653-11.52041-14.6897-11.65221-15.09912l-.33651-1.04411Zm46.59851,97.10524H326.59051a10.52909,10.52909,0,0,1,0-21.05818h38.28762a10.52909,10.52909,0,0,1,0,21.05818Zm174.2086-1.91436A11.5201,11.5201,0,0,1,527.60041,576.25H498.88473a11.5201,11.5201,0,0,1-11.48627-11.48627V547.53425A11.52,11.52,0,0,1,498.88473,536.048h28.71568a11.52,11.52,0,0,1,11.48627,11.48627Z" transform="translate(-171.93898 -113)" fill="#5da1e4" /><path d="M508.14328,561.21324H496.5975a3.10848,3.10848,0,0,0,0,6.217h11.54578a3.10849,3.10849,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><path d="M529.45864,561.21324H517.91281a3.10848,3.10848,0,0,0,0,6.217H529.4586a3.10849,3.10849,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><path d="M508.14155,552.43841H496.59576a3.10848,3.10848,0,0,0,0,6.217h11.54579a3.10848,3.10848,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><path d="M529.45691,552.43841H517.91107a3.10848,3.10848,0,0,0,0,6.217h11.54579a3.10848,3.10848,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><path d="M508.14155,543.84123H496.59576a3.10848,3.10848,0,0,0,0,6.217h11.54579a3.10848,3.10848,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><path d="M529.45691,543.84123H517.91107a3.10848,3.10848,0,0,0,0,6.217h11.54579a3.10848,3.10848,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><rect x="487" y="383.00001" width="28" height="27.99999" fill="#e6e6e6" /><path d="M625.939,513h46v46h-46Zm44,2h-42v42h42Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><rect y="152.00001" width="28" height="28" fill="#e6e6e6" /><path d="M232.939,276h-46V230h46Zm-44-2h42V232h-42Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><polygon points="653.077 661.417 640.817 661.417 634.985 614.129 653.079 614.129 653.077 661.417" fill="#ffb8b8" /><path d="M632.06,657.91362H655.7039a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H617.17317a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,632.06,657.91362Z" fill="#2f2e41" /><polygon points="714.077 661.417 701.817 661.417 695.985 614.129 714.079 614.129 714.077 661.417" fill="#ffb8b8" /><path d="M693.06,657.91362H716.7039a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H678.17317a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,693.06,657.91362Z" fill="#2f2e41" /><path d="M763.51493,605.30342a10.74267,10.74267,0,0,1,4.51052-15.84306l41.67577-114.86668,20.5071,11.19135L782.62359,595.55579a10.80091,10.80091,0,0,1-19.10866,9.74763Z" transform="translate(-171.93898 -113)" fill="#ffb8b8" /><path d="M879.75379,626.88737a10.74271,10.74271,0,0,1-2.89305-16.21659L863.95,489.16137l23.33776,1.06622L892.65342,609.748a10.80091,10.80091,0,0,1-12.89963,17.13934Z" transform="translate(-171.93898 -113)" fill="#ffb8b8" /><circle cx="670.5842" cy="315.75634" r="24.56103" fill="#ffb8b8" /><path d="M879.59694,599.25244H805.55006l.08911-.57617c.13306-.86133,13.19678-86.439,3.56177-114.436a11.813,11.813,0,0,1,6.06934-14.58349h.00024c13.77173-6.48535,40.20752-14.47119,62.52,4.90918a28.23446,28.23446,0,0,1,9.45947,23.396Z" transform="translate(-171.93898 -113)" fill="#ccc" /><path d="M819.77174,524.88428l-33.33667-6.76319,15.62622-37.02978a13.99723,13.99723,0,0,1,27.10571,6.99756Z" transform="translate(-171.93898 -113)" fill="#ccc" /><path d="M862.46778,537.44189l-2.00415-45.9414c-1.51977-8.63623,3.42408-16.80029,11.02735-18.13477,7.60547-1.32959,15.03174,4.66016,16.55835,13.35987l7.533,42.92773Z" transform="translate(-171.93898 -113)" fill="#ccc" /><path d="M877.13341,593.75241c11.91455,45.37671,13.21436,103.06939,10,166l-16-2-29-120-16,122-18-1c-5.37744-66.02973-10.61328-122.71527-2-160Z" transform="translate(-171.93898 -113)" fill="#2f2e41" /><path d="M858.70645,447.73782c-4.582,4.88078-13.09131,2.26066-13.68835-4.40717a8.05477,8.05477,0,0,1,.01014-1.5557c.30826-2.95357,2.01461-5.635,1.60587-8.7536a4.59042,4.59042,0,0,0-.84011-2.14891c-3.65124-4.88934-12.22227,2.18687-15.6682-2.2393-2.113-2.714.3708-6.98712-1.25065-10.02051-2.14006-4.00357-8.47881-2.0286-12.45388-4.22115-4.42275-2.43949-4.15821-9.22525-1.24686-13.35269,3.55052-5.0336,9.77572-7.71952,15.92336-8.10661s12.25292,1.27475,17.99229,3.51145c6.52109,2.54134,12.98768,6.05351,17.00067,11.78752,4.88021,6.97317,5.34986,16.34794,2.90917,24.50175C867.5152,437.69294,862.44812,443.75214,858.70645,447.73782Z" transform="translate(-171.93898 -113)" fill="#2f2e41" /><path d="M1027.061,787h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /></svg>
          </div>
          <div className='w-2/6'>
            <p className="font-semibold text-[#5DA1E4] text-xl">Get paid instantly, ensuring a hassle-free and rewarding experience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks