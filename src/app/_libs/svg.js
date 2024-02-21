
const SVG = ({svg, width, height, schemeOne, backgroundColor, dataOne, dataTwo, dataThree}) => {

  const selectSVG = (svg) => {
    switch(svg){

        case 'arrowDown':
          return <svg viewBox="0 0 24 24" width={width} height={height}>
            <path fill={schemeOne} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm4.71,10.71-4,4a1,1,0,0,1-1.41,0l-4-4a1,1,0,0,1,1.41-1.41L12,13.59l3.29-3.29a1,1,0,0,1,1.41,1.41Z"/>
          </svg>
          break;

        case 'close':
          return <svg enableBackground="new 0 0 48 48" height={height} version="1.1" viewBox="0 0 48 48" width={width} fill={schemeOne}>
            <g id="BG_xA0_Image_1_"/><g id="nature_1_"/><g id="Nature"/><g id="e-commerce_1_"/><g id="E-commerce"/><g id="organizing_1_"/><g id="Organizing"/><g id="business_1_"/><g id="Business"/><g id="data_communications_1_"/><g id="Data__x26__communications"/><g id="UI_1_"><g id="x_2_"><g><polygon points="48,1.416 46.585,0 24,22.599 1.445,0.03 0.031,1.446 22.585,24.015 0,46.584 1.414,48 24,25.431 46.555,48      47.969,46.584 25.415,24.015    "/></g></g></g><g id="GUI"/><g id="Media_files_icons_copy_1_"/><g id="Media_files"/>
          </svg>
          break;

        case 'plus':
          return <svg enableBackground="new 0 0 128 128" height={height} id="Layer_1" version="1.1" viewBox="0 0 128 128" width={width}><g>
            <path fill={schemeOne} d="M64,0C28.71,0,0,28.71,0,64s28.71,64,64,64s64-28.71,64-64S99.29,0,64,0z M64,120C33.122,120,8,94.879,8,64   C8,33.122,33.122,8,64,8c30.879,0,56,25.122,56,56C120,94.879,94.879,120,64,120z"/>
            <path fill={schemeOne} d="M96,60H68V32c0-2.209-1.791-4-4-4s-4,1.791-4,4v28H32c-2.209,0-4,1.791-4,4s1.791,4,4,4h28v28c0,2.209,1.791,4,4,4   s4-1.791,4-4V68h28c2.209,0,4-1.791,4-4S98.209,60,96,60z"/>
            </g>
          </svg>
          break;

        case 'arrowRight':
          return <svg width={width} height={height} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill={backgroundColor} d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"/>
              <path fill={schemeOne} fillRule="evenodd" clipRule="evenodd" d="M11.0886 6.18499C10.8717 6.43163 10.8717 6.83153 11.0886 7.07817L13.1032 9.36842H5.55556C5.24873 9.36842 5 9.65119 5 10C5 10.3488 5.24873 10.6316 5.55556 10.6316H13.1032L11.0886 12.9218C10.8717 13.1685 10.8717 13.5684 11.0886 13.815C11.3056 14.0617 11.6574 14.0617 11.8743 13.815L14.8373 10.4466C15.0542 10.1999 15.0542 9.80005 14.8373 9.55341L11.8743 6.18499C11.6574 5.93834 11.3056 5.93834 11.0886 6.18499Z"/>
            </svg>
          break;

        case 'eye':
          return <svg height={height} viewBox="0 0 16 16" width={width} fill={schemeOne}>
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
          </svg>                                
          break;

        case 'home':
          return <svg enableBackground="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" width={width} height={height}>
            <path fill={schemeOne} d="M30.854,16.548C30.523,17.43,29.703,18,28.764,18H28v11c0,0.552-0.448,1-1,1h-6v-7c0-2.757-2.243-5-5-5  s-5,2.243-5,5v7H5c-0.552,0-1-0.448-1-1V18H3.235c-0.939,0-1.759-0.569-2.09-1.451c-0.331-0.882-0.088-1.852,0.62-2.47L13.444,3.019  c1.434-1.357,3.679-1.357,5.112,0l11.707,11.086C30.941,14.696,31.185,15.666,30.854,16.548z" id="XMLID_219_"/>
            </svg>                                
          break;

        case 'search':
          return <svg width={width} height={height} viewBox="0 0 32 32">
            <path d="M29.7954 28.1795L25.1428 23.5269C27.4134 20.8394 28.5577 17.3785 28.3365 13.8672C28.1153 10.3559 26.5458 7.06595 23.9559 4.68467C21.366 2.30339 17.9561 1.01505 14.4386 1.08882C10.9211 1.16259 7.56825 2.59277 5.08047 5.08055C2.5927 7.56832 1.16251 10.9212 1.08874 14.4387C1.01497 17.9562 2.30332 21.3661 4.6846 23.956C7.06588 26.5459 10.3559 28.1154 13.8671 28.3366C17.3784 28.5577 20.8394 27.4135 23.5268 25.1429L28.1794 29.7955C28.3949 30.0036 28.6836 30.1188 28.9833 30.1162C29.2829 30.1136 29.5696 29.9934 29.7815 29.7815C29.9934 29.5697 30.1136 29.283 30.1162 28.9834C30.1188 28.6837 30.0036 28.395 29.7954 28.1795ZM14.7531 26.0778C12.5133 26.0778 10.3238 25.4136 8.46151 24.1692C6.5992 22.9249 5.1477 21.1562 4.29057 19.0869C3.43344 17.0176 3.20917 14.7406 3.64613 12.5439C4.08309 10.3471 5.16166 8.32927 6.74543 6.7455C8.3292 5.16173 10.347 4.08317 12.5438 3.64621C14.7405 3.20925 17.0175 3.43351 19.0868 4.29064C21.1561 5.14777 22.9248 6.59927 24.1691 8.46159C25.4135 10.3239 26.0777 12.5134 26.0777 14.7532C26.0744 17.7556 24.8802 20.6341 22.7571 22.7572C20.6341 24.8802 17.7556 26.0744 14.7531 26.0778Z" fill={schemeOne}/>
          </svg>                               
          break;

        case 'star':
          return <svg width={width} height={height} viewBox="0 0 28 28" fill="none">
            <path d="M26.7727 10.8757C26.7043 10.6719 26.581 10.4909 26.4163 10.3528C26.2516 10.2146 26.0519 10.1247 25.8393 10.0929L18.3937 8.95535L15.0523 1.83869C14.9581 1.63826 14.8088 1.46879 14.6218 1.35008C14.4349 1.23137 14.218 1.16833 13.9965 1.16833C13.775 1.16833 13.5581 1.23137 13.3712 1.35008C13.1842 1.46879 13.0349 1.63826 12.9407 1.83869L9.59934 8.95535L2.15367 10.0929C1.9416 10.1252 1.74254 10.2154 1.57839 10.3535C1.41423 10.4916 1.29133 10.6723 1.22321 10.8757C1.15508 11.0791 1.14436 11.2974 1.19222 11.5065C1.24008 11.7156 1.34468 11.9075 1.49451 12.061L6.92067 17.6167L5.63734 25.4777C5.60232 25.6934 5.6286 25.9147 5.7132 26.1162C5.79779 26.3177 5.93729 26.4914 6.1158 26.6175C6.29432 26.7436 6.50466 26.817 6.72287 26.8294C6.94108 26.8418 7.15838 26.7926 7.35001 26.6875L14 23.0149L20.65 26.6875C20.8416 26.7935 21.0592 26.8434 21.2779 26.8316C21.4965 26.8197 21.7075 26.7466 21.8865 26.6205C22.0655 26.4944 22.2055 26.3204 22.2903 26.1186C22.3751 25.9167 22.4014 25.695 22.3662 25.4789L21.0828 17.6179L26.5055 12.061C26.6546 11.9071 26.7585 11.715 26.8056 11.5059C26.8527 11.2968 26.8413 11.0787 26.7727 10.8757Z" fill={schemeOne}/>
          </svg>                              
          break;

        case 'bell':
          return <svg width={width} height={height} viewBox="0 0 28 28">
            <path d="M23.3333 19.8333H23.1187C23.2568 19.4597 23.3295 19.065 23.3333 18.6666V12.8333C23.3294 10.7663 22.6402 8.75902 21.3735 7.12565C20.1068 5.49228 18.3343 4.32508 16.3333 3.80679V3.49996C16.3333 2.88112 16.0875 2.28763 15.6499 1.85004C15.2123 1.41246 14.6188 1.16663 14 1.16663C13.3812 1.16663 12.7877 1.41246 12.3501 1.85004C11.9125 2.28763 11.6667 2.88112 11.6667 3.49996V3.80679C9.66574 4.32508 7.89317 5.49228 6.6265 7.12565C5.35983 8.75902 4.67058 10.7663 4.66667 12.8333V18.6666C4.67053 19.065 4.74316 19.4597 4.88133 19.8333H4.66667C4.35725 19.8333 4.0605 19.9562 3.84171 20.175C3.62292 20.3938 3.5 20.6905 3.5 21C3.5 21.3094 3.62292 21.6061 3.84171 21.8249C4.0605 22.0437 4.35725 22.1666 4.66667 22.1666H23.3333C23.6428 22.1666 23.9395 22.0437 24.1583 21.8249C24.3771 21.6061 24.5 21.3094 24.5 21C24.5 20.6905 24.3771 20.3938 24.1583 20.175C23.9395 19.9562 23.6428 19.8333 23.3333 19.8333Z" fill={schemeOne}/>
            <path d="M9.9819 24.5C10.3863 25.2088 10.971 25.7981 11.6766 26.2079C12.3823 26.6178 13.1838 26.8337 13.9999 26.8337C14.816 26.8337 15.6175 26.6178 16.3232 26.2079C17.0288 25.7981 17.6135 25.2088 18.0179 24.5H9.9819Z" fill={schemeOne}/>
          </svg>                             
          break;

        case 'mail':
          return <svg width={width} height={height} viewBox="0 0 28 28" fill="none">
            <path d="M27.076 6.24662C26.962 5.48439 26.5787 4.78822 25.9955 4.28434C25.4123 3.78045 24.6679 3.50219 23.8971 3.5H4.10289C3.33217 3.50219 2.58775 3.78045 2.00456 4.28434C1.42137 4.78822 1.03803 5.48439 0.924011 6.24662L14 14.7079L27.076 6.24662Z" fill={schemeOne}/>
            <path d="M14.4751 16.485C14.3336 16.5765 14.1686 16.6252 14 16.6252C13.8314 16.6252 13.6664 16.5765 13.5249 16.485L0.875 8.30025V21.2721C0.875926 22.1279 1.2163 22.9484 1.82145 23.5536C2.42659 24.1587 3.24707 24.4991 4.10288 24.5H23.8971C24.7529 24.4991 25.5734 24.1587 26.1786 23.5536C26.7837 22.9484 27.1241 22.1279 27.125 21.2721V8.29938L14.4751 16.485Z" fill={schemeOne}/>
          </svg>                         
          break;

        case 'calendar':
          return <svg width={width} height={height} viewBox="0 0 28 28" fill="none">
            <path d="M22.1666 5.83331H20.9999V3.49998C20.9999 3.19056 20.877 2.89381 20.6582 2.67502C20.4394 2.45623 20.1427 2.33331 19.8333 2.33331C19.5238 2.33331 19.2271 2.45623 19.0083 2.67502C18.7895 2.89381 18.6666 3.19056 18.6666 3.49998V5.83331H9.33325V3.49998C9.33325 3.19056 9.21034 2.89381 8.99154 2.67502C8.77275 2.45623 8.47601 2.33331 8.16659 2.33331C7.85717 2.33331 7.56042 2.45623 7.34163 2.67502C7.12284 2.89381 6.99992 3.19056 6.99992 3.49998V5.83331H5.83325C4.90499 5.83331 4.01476 6.20206 3.35838 6.85844C2.702 7.51482 2.33325 8.40506 2.33325 9.33331V10.5H25.6666V9.33331C25.6666 8.40506 25.2978 7.51482 24.6415 6.85844C23.9851 6.20206 23.0948 5.83331 22.1666 5.83331Z" fill={schemeOne}/>
            <path d="M2.33325 22.1666C2.33325 23.0949 2.702 23.9851 3.35838 24.6415C4.01476 25.2979 4.90499 25.6666 5.83325 25.6666H22.1666C23.0948 25.6666 23.9851 25.2979 24.6415 24.6415C25.2978 23.9851 25.6666 23.0949 25.6666 22.1666V12.8333H2.33325V22.1666Z" fill={schemeOne}/>
          </svg>                        
          break;

        case 'gear':
          return <svg width={width} height={height} viewBox="0 0 28 28" fill="none">
            <path d="M25.8533 16.8L24.3179 15.9145C24.5606 14.6489 24.5606 13.3487 24.3179 12.0831L25.8533 11.2C25.9861 11.1234 26.1025 11.0213 26.1959 10.8997C26.2892 10.778 26.3577 10.6392 26.3974 10.4911C26.437 10.3429 26.4471 10.1885 26.427 10.0364C26.4069 9.88442 26.357 9.73786 26.2803 9.60513L23.9469 5.56379C23.8706 5.43082 23.7688 5.3142 23.6474 5.22059C23.526 5.12698 23.3873 5.05822 23.2393 5.01824C23.0913 4.97825 22.9369 4.96784 22.7848 4.98758C22.6328 5.00732 22.4861 5.05684 22.3533 5.13329L20.8191 6.01996C19.8392 5.18486 18.7141 4.53708 17.4999 4.10896V2.33329C17.4999 2.02387 17.377 1.72713 17.1582 1.50833C16.9394 1.28954 16.6427 1.16663 16.3333 1.16663H11.6666C11.3572 1.16663 11.0604 1.28954 10.8416 1.50833C10.6228 1.72713 10.4999 2.02387 10.4999 2.33329V4.10896C9.28564 4.53744 8.16053 5.18561 7.18075 6.02113L5.64659 5.13329C5.51384 5.05674 5.36731 5.00709 5.21537 4.98718C5.06342 4.96727 4.90905 4.97748 4.76106 5.01724C4.61306 5.057 4.47435 5.12553 4.35285 5.21891C4.23135 5.31229 4.12943 5.42869 4.05292 5.56146L1.71959 9.60279C1.64244 9.73562 1.59228 9.88238 1.57199 10.0346C1.5517 10.1869 1.56168 10.3417 1.60135 10.4901C1.64103 10.6385 1.70961 10.7776 1.80318 10.8994C1.89674 11.0212 2.01344 11.1234 2.14659 11.2L3.68192 12.0855C3.43926 13.351 3.43926 14.6512 3.68192 15.9168L2.14659 16.8C2.01375 16.8766 1.89733 16.9786 1.80397 17.1002C1.7106 17.2219 1.64213 17.3607 1.60248 17.5089C1.56282 17.657 1.55275 17.8115 1.57284 17.9635C1.59294 18.1155 1.6428 18.2621 1.71959 18.3948L4.05292 22.4361C4.20756 22.7041 4.46228 22.8996 4.76109 22.9798C5.06015 23.0582 5.37804 23.0163 5.64659 22.8631L7.18075 21.9765C8.16035 22.8128 9.28547 23.4618 10.4999 23.891V25.6666C10.4999 25.976 10.6228 26.2728 10.8416 26.4916C11.0604 26.7104 11.3572 26.8333 11.6666 26.8333H16.3333C16.6427 26.8333 16.9394 26.7104 17.1582 26.4916C17.377 26.2728 17.4999 25.976 17.4999 25.6666V23.891C18.7142 23.4625 19.8393 22.8143 20.8191 21.9788L22.3533 22.8655C22.6217 23.0189 22.9397 23.0608 23.2388 22.9821C23.5376 22.902 23.7923 22.7064 23.9469 22.4385L26.2803 18.3971C26.3574 18.2643 26.4076 18.1175 26.4278 17.9653C26.4481 17.813 26.4382 17.6583 26.3985 17.5099C26.3588 17.3615 26.2902 17.2224 26.1967 17.1005C26.1031 16.9787 25.9864 16.8766 25.8533 16.8ZM13.9999 19.8333C12.8462 19.8333 11.7184 19.4912 10.7591 18.8502C9.79981 18.2092 9.05213 17.2982 8.61062 16.2323C8.16911 15.1664 8.05359 13.9935 8.27867 12.8619C8.50375 11.7304 9.05932 10.691 9.87513 9.87517C10.6909 9.05936 11.7303 8.50379 12.8619 8.27871C13.9934 8.05363 15.1663 8.16915 16.2322 8.61066C17.2981 9.05217 18.2092 9.79985 18.8502 10.7591C19.4911 11.7184 19.8333 12.8462 19.8333 14C19.8314 15.5465 19.2162 17.0291 18.1227 18.1227C17.0291 19.2163 15.5464 19.8314 13.9999 19.8333Z" fill={schemeOne}/>
          </svg>                       
          break;

        case 'bar':
          return <svg width={width} height={height} viewBox="0 0 10 101" fill="none">
            <rect width={width} height={height} rx="5" transform="matrix(-1 0 0 1 10 0.269531)" fill={backgroundColor}/>
            <rect width={dataOne} height={dataTwo} rx="5" transform={`matrix(-1 0 0 1 10 ${dataThree})`} fill={schemeOne}/>
          </svg>                       
          break;

        case 'horizontalBar':
          return <svg width={width} height={height} viewBox="0 0 205 10" fill="none">
            <rect width="10" height={width} rx="5" transform={`matrix(1.19249e-08 -1 -1 -1.19249e-08 ${width} 10)`} fill={backgroundColor}/>
            <rect width="10" height={dataOne} rx="5" transform={`matrix(1.19249e-08 -1 -1 -1.19249e-08 ${dataOne} 10)`} fill={schemeOne}/>
          </svg>                       
          break;
        
        case 'wave':
        return <svg width={width} height={height} viewBox={`0 0 114 59`} fill="none">
          <path d="M3 19.1913L10.7266 8.75615C16.8382 0.502129 29.4618 1.4196 34.3158 10.4706L54.4714 48.0542C59.3878 57.2218 72.2311 58.0152 78.2386 49.5226L88.6646 34.7839C91.2887 31.0742 95.5501 28.8689 100.094 28.8689H111" stroke={schemeOne} strokeWidth="6" strokeLinecap="round"/>
        </svg>                      
        break;

        case 'wave2':
          return <svg width={width} height={height} viewBox="0 0 117 81" fill="none">
            <path d="M114 3L96.7632 35.8536C91.8407 45.2359 78.6837 45.9617 72.7592 37.1776L69.7351 32.6941C63.5646 23.5454 49.7285 24.7994 45.3034 34.9083L30.2518 69.2924C26.083 78.8157 13.3554 80.634 6.68677 72.659L3.00006 68.25" stroke={schemeOne} strokeWidth="6" strokeLinecap="round"/>
          </svg>                      
          break;

        case 'beer':
          return <svg width={width} height={height} viewBox="0 0 512 512">
            <path fill={schemeOne} d="M32 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V96h51.2c42.4 0 76.8 34.4 76.8 76.8V274.9c0 30.4-17.9 57.9-45.6 70.2L384 381.7V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM384 311.6l56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7V172.8c0-7.1-5.7-12.8-12.8-12.8H384V311.6zM160 144c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144z"/>
          </svg>                     
          break;

        case 'event':
          return <svg width={width} height={height} viewBox="0 0 448 512">
            <path fill={schemeOne} d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/>
          </svg>                     
          break;
        
        case 'analytics':
          return <svg width="284" height="284" viewBox="0 0 284 284" fill="none">
            <path d="M177.292 251.405H118.059V281.019H177.292V251.405Z" fill="#9BAFB8"/>
            <path d="M215 278H80V284H215V278Z" fill="#4D768A"/>
            <path d="M246.283 93.3582C244.894 91.9693 243.076 91.2748 241.255 91.2748H54.0729C52.2597 91.2748 50.4376 91.9693 49.0564 93.3582C47.6692 94.7454 46.9792 96.5659 46.9792 98.3819V227.698H248.367V98.3824C248.365 96.5659 247.675 94.7443 246.283 93.3582ZM235.336 214.674H60.0068V104.304H235.335V214.674H235.336Z" fill="#C1CED4"/>
            <path d="M46.9786 227.697V244.29C46.9786 246.105 47.6686 247.928 49.0559 249.31C50.4387 250.693 52.2591 251.399 54.0723 251.399H241.255C243.076 251.399 244.894 250.693 246.283 249.31C247.673 247.927 248.365 246.105 248.365 244.29V227.697H46.9786Z" fill="#C1CED4"/>
            <path d="M271.471 121.287C270.69 120.507 269.424 120.507 268.643 121.287L245.08 144.845C244.299 145.626 243.032 145.626 242.251 144.845L229.281 131.866C228.548 131.133 227.376 131.081 226.582 131.747L196.906 156.619C196.112 157.285 194.94 157.233 194.207 156.5L189.632 151.925C188.851 151.144 187.585 151.144 186.804 151.925L175.083 163.649C174.302 164.43 173.036 164.43 172.254 163.649L159.691 151.094C158.91 150.313 157.644 150.314 156.863 151.094L128.197 179.76C127.416 180.541 126.15 180.541 125.369 179.761L116.736 171.135C115.955 170.355 114.696 170.348 113.915 171.128C109.745 175.298 97.4745 187.567 93.2867 191.759C92.5014 192.545 91.2334 192.534 90.4477 191.749L70.7417 172.051C69.9606 171.271 68.6945 171.271 67.9136 172.052L22.4899 217.474C21.7089 218.255 21.7088 219.522 22.4896 220.303L23.8733 221.687C24.6544 222.468 25.9209 222.468 26.7021 221.687L67.9137 180.475C68.6946 179.695 69.9606 179.694 70.7417 180.475L90.4607 200.182C91.2418 200.963 92.4995 200.971 93.2803 200.19C97.2901 196.179 108.823 184.644 113.916 179.551C114.697 178.771 115.955 178.778 116.736 179.559L125.369 188.184C126.15 188.964 127.416 188.964 128.197 188.183L156.863 159.518C157.644 158.737 158.91 158.737 159.691 159.518L172.254 172.072C173.036 172.853 174.302 172.853 175.083 172.072L186.804 160.348C187.585 159.567 188.851 159.567 189.632 160.348L193.855 164.572C194.588 165.305 195.76 165.356 196.554 164.69L226.225 139.818C227.019 139.152 228.191 139.204 228.924 139.937L242.246 153.269C243.027 154.05 244.294 154.051 245.075 153.27L272.854 125.5C273.635 124.718 273.635 123.452 272.854 122.671L271.471 121.287Z" fill="#4F2A78"/>
            <path d="M275.141 138.232H269.182V124.958H255.91V119H275.141V138.232Z" fill="#4F2A78"/>
            <path d="M21 63.5378C14.3726 63.5378 9 68.9104 9 75.5378V127C9 133.627 14.3726 139 21 139H23.4775V146.842C23.4775 151.297 28.8629 153.528 32.0128 150.378L43.3925 139H125.626C132.253 139 137.626 133.627 137.626 127V75.5379C137.626 68.9104 132.253 63.5378 125.626 63.5378H21Z" fill="#1EAEDC"/>
            <path d="M60.0068 139V104.303H137.484V91.2748H54.0729C52.2597 91.2748 50.4376 91.9693 49.0564 93.3582C47.6692 94.7454 46.9792 96.5659 46.9792 98.3819V139H60.0068Z" fill="#59CCF0"/>
            <path d="M34 120.662V116.356C34 114.699 32.6569 113.356 31 113.356C29.3431 113.356 28 114.699 28 116.356V120.662C28 122.319 29.3431 123.662 31 123.662C32.6569 123.662 34 122.319 34 120.662Z" fill="white"/>
            <path d="M46 120.656V106.799C46 105.143 44.6569 103.799 43 103.799C41.3431 103.799 40 105.143 40 106.799V120.656C40 122.313 41.3431 123.656 43 123.656C44.6569 123.656 46 122.313 46 120.656Z" fill="white"/>
            <path d="M58 120.665V111.216C58 109.559 56.6569 108.216 55 108.216C53.3431 108.216 52 109.559 52 111.216V120.665C52 122.322 53.3431 123.665 55 123.665C56.6569 123.665 58 122.322 58 120.665Z" fill="white"/>
            <path d="M70 120.662V89.1808C70 87.5239 68.6569 86.1808 67 86.1808C65.3431 86.1808 64 87.5239 64 89.1808V120.662C64 122.319 65.3431 123.662 67 123.662C68.6569 123.662 70 122.319 70 120.662Z" fill="white"/>
            <path d="M82 120.666V99.1316C82 97.4747 80.6569 96.1316 79 96.1316C77.3431 96.1316 76 97.4747 76 99.1316V120.666C76 122.323 77.3431 123.666 79 123.666C80.6569 123.666 82 122.323 82 120.666Z" fill="white"/>
            <path d="M94 120.659V81.7226C94 80.0657 92.6569 78.7226 91 78.7226C89.3431 78.7226 88 80.0657 88 81.7226V120.659C88 122.316 89.3431 123.659 91 123.659C92.6569 123.659 94 122.316 94 120.659Z" fill="white"/>
            <path d="M106 120.532V103.169C106 101.512 104.657 100.169 103 100.169C101.343 100.169 100 101.512 100 103.169V120.532C100 122.189 101.343 123.532 103 123.532C104.657 123.532 106 122.189 106 120.532Z" fill="white"/>
            <path d="M118 120.526V107.78C118 106.123 116.657 104.78 115 104.78C113.343 104.78 112 106.123 112 107.78V120.526C112 122.182 113.343 123.526 115 123.526C116.657 123.526 118 122.182 118 120.526Z" fill="white"/>
            <path d="M175.997 29C165.501 29 157 37.5027 157 47.9969C157 58.491 165.502 67 175.997 67C186.489 67 195 58.4914 195 47.9969C195 37.5024 186.489 29 175.997 29Z" fill="#896CC0"/>
            <path d="M186.999 129.761C191.487 129.761 195.125 126.122 195.125 121.634C195.125 117.146 191.487 113.508 186.999 113.508C182.511 113.508 178.872 117.146 178.872 121.634C178.872 126.122 182.511 129.761 186.999 129.761Z" fill="#63D1DB"/>
            <path d="M251.012 83.7268C251.012 92.0447 244.269 98.7885 235.95 98.7885C227.638 98.7885 220.891 92.0453 220.891 83.7268C220.891 75.4128 227.639 68.6697 235.95 68.6697C244.267 68.6697 251.012 75.4112 251.012 83.7268Z" fill="#FA7FC2"/>
            <path d="M58.756 71.6061C49.2822 71.6061 41.5728 63.8973 41.5728 54.4218C41.5728 44.9435 49.2816 37.233 58.756 37.233C68.2304 37.233 75.9403 44.9435 75.9403 54.4218C75.9403 63.8967 68.2298 71.6061 58.756 71.6061ZM58.756 43.1913C52.5664 43.1913 47.5311 48.2294 47.5311 54.4218C47.5311 60.6131 52.5664 65.6478 58.756 65.6478C64.9473 65.6478 69.982 60.6125 69.982 54.4218C69.982 48.2289 64.9473 43.1913 58.756 43.1913Z" fill="#EAED5A"/>
            <path d="M108.372 41.616C108.372 44.9812 105.646 47.7075 102.281 47.7075C98.9227 47.7075 96.1948 44.9812 96.1948 41.616C96.1948 38.2547 98.921 35.5302 102.281 35.5302C105.645 35.5302 108.372 38.2553 108.372 41.616Z" fill="#C1CED4"/>
            <path d="M248.365 141.559L243.665 146.259L235.336 137.924V146.353L243.661 154.684L248.365 149.981V141.559Z" fill="#688C9D"/>
            <path d="M46.9786 201.409L60.0068 188.381V179.956L46.9786 192.986V201.409Z" fill="#688C9D"/>
            <path d="M246.283 93.3582C244.894 91.9693 243.076 91.2748 241.255 91.2748H222.932C225.542 95.7622 230.39 98.7879 235.949 98.7879C240.255 98.7879 244.128 96.9719 246.871 94.0765C246.685 93.8324 246.509 93.5812 246.283 93.3582Z" fill="#FFCCE8"/>
            <path d="M65.2834 63.5378C63.4419 64.8613 61.191 65.6478 58.756 65.6478C56.321 65.6478 54.0701 64.8596 52.2286 63.5378H44.2158C47.2604 68.3757 52.6319 71.6061 58.7549 71.6061C64.879 71.6061 70.2511 68.3757 73.2951 63.5378H65.2834Z" fill="#72D9FA"/>
            <path d="M203 47C203 42.1285 201.682 37.3478 199.186 33.1645C196.689 28.9812 193.108 25.5512 188.821 23.238C184.533 20.9249 179.7 19.8147 174.833 20.0252C169.966 20.2357 165.247 21.7591 161.175 24.4338C157.104 27.1086 153.832 30.835 151.706 35.2182C149.58 39.6015 148.68 44.4782 149.101 49.3315C149.522 54.1847 151.247 58.8338 154.096 62.7859C156.944 66.7381 160.808 69.846 165.279 71.7803L172.147 55.9063C170.54 55.2111 169.151 54.094 168.127 52.6736C167.104 51.2532 166.483 49.5823 166.332 47.8379C166.181 46.0936 166.505 44.3409 167.269 42.7655C168.033 41.1902 169.209 39.8508 170.672 38.8895C172.135 37.9282 173.831 37.3807 175.581 37.305C177.33 37.2294 179.067 37.6284 180.608 38.4597C182.149 39.2911 183.436 40.5239 184.333 42.0274C185.23 43.5309 185.704 45.2491 185.704 47H203Z" fill="url(#paint0_linear_230_12)"/>
            <defs>
            <linearGradient id="paint0_linear_230_12" x1="181.5" y1="20" x2="163" y2="67" gradientUnits="userSpaceOnUse">
            <stop stopColor="#499DEB"/>
            <stop offset="1" stopColor="#499DEB" stopOpacity="0"/>
            </linearGradient>
            </defs>
          </svg>
                                
          break;
    }
  }
  
  return (
    <>
      {selectSVG(svg)}
    </>
  )
}

export default SVG
