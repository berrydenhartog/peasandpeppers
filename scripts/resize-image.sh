#!/bin/bash
# sudo apt-get install imagemagick
# sudo apt-get install webp 
for f in heroimages/*.jpg; do
   basename=`basename ${f}`
   result=`identify ${f}`
   echo "$result"
   imagedimension=`echo $result | cut -d' ' -f 3`
   curx=`echo $imagedimension | cut -d'x' -f 1`
   cury=`echo $imagedimension | cut -d'x' -f 2`
   
   # redize max 2560
   newx=$(($curx>2560 ? 2560 : $curx))
   newy=$(($newx / 2))
   echo "$newx,$newy"
   
   convert ${f} -resize "${newx}x${cury}>" ${basename}
   result=`identify ${basename}`
   echo "$result"
   imagedimension=`echo $result | cut -d' ' -f 3`
   curx=`echo $imagedimension | cut -d'x' -f 1`
   cury=`echo $imagedimension | cut -d'x' -f 2`
   
   # crop to fit hero
   newx=$(($curx>2560 ? 2560 : $curx))
   newy=$(($newx / 2))
   echo "$newx,$newy"
   
   convert ${basename} -gravity center -crop "${newx}x${newy}+0+0" /home/user/projects/peasandpeppers/front/app/src/assets/${basename}
   rm -f ${basename}
   echo `identify /home/user/projects/peasandpeppers/front/app/src/assets/${basename}`

done
